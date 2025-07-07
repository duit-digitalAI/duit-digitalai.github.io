// API utility for backend integration
const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:3045";

export async function sendAuthEvent({ mobile, acceptTerms, authorizeNotif }) {
  return fetch(`${API_BASE}/api/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mobile, acceptTerms, authorizeNotif, timestamp: new Date().toISOString() }),
    credentials: "include"
  });
}

export async function sendOtp({ mobile }) {
  return fetch(`${API_BASE}/api/otp/send`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mobile }),
    credentials: "include"
  });
}

export async function verifyOtp({ mobile, otp }) {
  return fetch(`${API_BASE}/api/otp/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mobile, otp }),
    credentials: "include"
  });
}

export async function resendOtp({ mobile }) {
  // Optionally, you can use the same endpoint as sendOtp or a dedicated one if available
  return sendOtp({ mobile });
} 