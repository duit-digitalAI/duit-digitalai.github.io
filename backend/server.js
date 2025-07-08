require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const sql = require('mssql');

const app = express();

// Middleware
const allowedOrigins = [
  'http://localhost:8083',
  'https://green-ground-02bf76e00.2.azurestaticapps.net'
];
console.log('CORS allowed origins:', allowedOrigins);
app.use(cors({
  origin: allowedOrigins,
  credentials: true, // if you use cookies/auth
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

// Static (optional, only if you need to serve assets/images)
app.use('/assets', express.static(path.join(__dirname, 'dist/assets')));
app.use('/images', express.static(path.join(__dirname, 'dist/images')));
app.use('/assets', express.static(path.join(__dirname, 'dist')));

// Azure SQL config (from .env)
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_SERVER, // e.g. 'your-server.database.windows.net'
  database: process.env.DB_NAME,
  options: {
    encrypt: true, // for Azure
    trustServerCertificate: true, // true for local dev
  },
};

// Helper: Generate random 6-digit OTP
function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Health check endpoint
app.get('/api/health', async (req, res) => {
  try {
    await sql.connect(dbConfig);
    res.json({ status: 'ok', db: 'connected' });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
});

// Home (API root)
app.get('/', (req, res) => {
  res.json({ status: 'API running' });
});

// POST /api/auth - Save AuthEvent
app.post('/api/auth', async (req, res) => {
  const { mobile, acceptTerms, authorizeNotif } = req.body;
  if (!mobile || typeof acceptTerms !== 'boolean' || typeof authorizeNotif !== 'boolean') {
    return res.status(400).json({ success: false, error: 'Missing or invalid fields' });
  }
  try {
    await sql.connect(dbConfig);
    const result = await sql.query`
      INSERT INTO AuthEvents (mobile, accept_terms, authorize_notifications)
      OUTPUT INSERTED.id
      VALUES (${mobile}, ${acceptTerms}, ${authorizeNotif})
    `;
    res.json({ success: true, id: result.recordset[0].id });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/otp/send - Generate and send OTP via SMS API
app.post('/api/otp/send', async (req, res) => {
  console.log('--- /api/otp/send called ---');
  console.log('Request body:', req.body);
  const { mobile } = req.body;
  if (!mobile) {
    console.warn('No mobile provided in request');
    return res.status(400).json({ success: false, error: 'Mobile number is required' });
  }
  const otp = generateOtp();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 min from now
  const message = process.env.FONADA_TEMPLATE_MESSAGE.replace('{otp}', otp);
  const encodedMessage = encodeURIComponent(message);
  const smsApiUrl = `https://api.flash49.com/fe/api/v1/send?username=${encodeURIComponent(process.env.FONADA_USER)}&password=${encodeURIComponent(process.env.FONADA_PASS)}&unicode=false&from=${encodeURIComponent(process.env.FONADA_SENDER_ID)}&to=${encodeURIComponent(mobile)}&text=${encodedMessage}&dltContentId=${encodeURIComponent(process.env.FONADA_DLT_CONTENT_ID)}&corelationId=`;
  
  try {
    console.log('Connecting to SQL...');
    await sql.connect(dbConfig);
    console.log('Inserting OTP event into AuthEvents table...');
    await sql.query`
      INSERT INTO AuthEvents (mobile, otp_code, otp_expires_at, created_at, accept_terms, authorize_notifications, otp_sent)
      VALUES (${mobile}, ${otp}, ${expiresAt}, GETDATE(), 0, 0, 1)
    `;
    console.log('Inserted OTP event. Sending SMS via new API...');
    console.log('SMS API URL:', smsApiUrl);
    const smsRes = await fetch(smsApiUrl, { method: 'GET' });
    const smsData = await smsRes.json();
    console.log('SMS API response:', smsData);
    if (smsData.state === 'SUBMIT_ACCEPTED') {
      console.log('OTP SMS sent successfully.');
      return res.json({ success: true });
    }
    // If not accepted, treat as error
    console.error('SMS send failed:', smsData.description || 'Unknown error');
    res.status(500).json({ success: false, error: smsData.description || 'SMS send failed' });
  } catch (err) {
    console.error('OTP send error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/otp/verify - Verify OTP
app.post('/api/otp/verify', async (req, res) => {
  const { mobile, otp } = req.body;
  if (!mobile || !otp) {
    return res.status(400).json({ success: false, error: 'Mobile and OTP are required' });
  }
  try {
    await sql.connect(dbConfig);
    // Find latest AuthEvent for this mobile
    const find = await sql.query`
      SELECT TOP 1 * FROM AuthEvents WHERE mobile = ${mobile} ORDER BY created_at DESC
    `;
    if (!find.recordset.length) {
      return res.status(404).json({ success: false, error: 'No AuthEvent found for this mobile' });
    }
    const event = find.recordset[0];
    const now = new Date();
    if (!event.otp_code || !event.otp_expires_at) {
      return res.status(400).json({ success: false, error: 'No OTP sent for this mobile' });
    }
    if (event.otp_code !== otp) {
      // Mark as failed
      await sql.query`
        UPDATE AuthEvents SET otp_failed = 1 WHERE id = ${event.id}
      `;
      return res.status(400).json({ success: false, error: 'Invalid OTP' });
    }
    if (now > event.otp_expires_at) {
      return res.status(400).json({ success: false, error: 'OTP expired' });
    }
    // Mark as verified
    await sql.query`
      UPDATE AuthEvents SET otp_verified = 1, otp_failed = 0, otp_timestamp = ${now} WHERE id = ${event.id}
    `;
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Debug endpoint to check CORS config
app.get('/api/cors-debug', (req, res) => {
  res.json({
    allowedOrigins
  });
});

app.options('*', cors({
  origin: allowedOrigins,
  credentials: true,
}));

const PORT = process.env.PORT || 3045;
app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});
