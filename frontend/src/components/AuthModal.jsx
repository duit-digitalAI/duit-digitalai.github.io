import React, { useState, useEffect, useRef } from "react";
import { sendAuthEvent, sendOtp, verifyOtp, resendOtp } from "../api";

const AuthModal = ({ open, onClose }) => {
  const [step, setStep] = useState(1); // 1: enter mobile, 2: enter OTP, 3: thank you
  const [mobile, setMobile] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [authorizeNotif, setAuthorizeNotif] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);
  const timerRef = useRef(null);

  // Reset state on modal close
  useEffect(() => {
    if (!open) {
      setStep(1);
      setMobile("");
      setAcceptTerms(false);
      setAuthorizeNotif(false);
      setOtp("");
      setError("");
      setOtpSent(false);
      setOtpTimer(0);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  }, [open]);

  // OTP resend timer
  useEffect(() => {
    if (otpTimer > 0) {
      timerRef.current = setInterval(() => {
        setOtpTimer((t) => {
          if (t <= 1) {
            clearInterval(timerRef.current);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [otpTimer]);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (!/^\d{10}$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!acceptTerms || !authorizeNotif) {
      setError("Please accept the terms and authorize notifications.");
      return;
    }
    setOtpSent(true);
    setOtpTimer(60);
    setStep(2);
    try {
      await sendAuthEvent({ mobile, acceptTerms, authorizeNotif });
      await sendOtp({ mobile });
    } catch (err) {
      setError("Failed to send OTP. Please try again.");
      setStep(1);
      setOtpSent(false);
      setOtpTimer(0);
    }
  };

  const handleResendOtp = async () => {
    setOtpSent(true);
    setOtpTimer(60);
    setError("");
    setOtp("");
    try {
      await resendOtp({ mobile });
    } catch (err) {
      setError("Failed to resend OTP. Please try again.");
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await verifyOtp({ mobile, otp });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.message || "Invalid OTP. Please try again.");
        return;
      }
      setStep(3);
    } catch (err) {
      setError("Failed to verify OTP. Please try again.");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-lg">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold">&times;</button>
        {step === 1 && (
          <form onSubmit={handleSendOtp}>
            <h2 className="text-2xl font-bold mb-4 text-center">Enter Your Mobile Number</h2>
            <input
              type="tel"
              className="w-full border rounded px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Mobile Number"
              value={mobile}
              onChange={e => setMobile(e.target.value.replace(/\D/g, ""))}
              maxLength={10}
              required
            />
            <div className="mb-2 flex flex-col gap-2">
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={e => setAcceptTerms(e.target.checked)}
                  className="mr-2 accent-yellow-500"
                  required
                />
                I accept the Terms and Conditions and Privacy Policy which can be accessed <a href="/legal" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 ml-1">here</a>
              </label>
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  checked={authorizeNotif}
                  onChange={e => setAuthorizeNotif(e.target.checked)}
                  className="mr-2 accent-yellow-500"
                  required
                />
                I authorize notifications via SMS/WhatsApp/Email and RCS
              </label>
            </div>
            {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
            <button
              type="submit"
              className={`w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded transition ${(!acceptTerms || !authorizeNotif) ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!acceptTerms || !authorizeNotif}
            >
              Send OTP
            </button>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handleVerifyOtp}>
            <h2 className="text-2xl font-bold mb-4 text-center">Enter OTP</h2>
            <input
              type="text"
              className="w-full border rounded px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={e => setOtp(e.target.value.replace(/\D/g, ""))}
              maxLength={6}
              required
            />
            {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded transition"
            >
              Verify OTP
            </button>
            <div className="mt-4 flex flex-col items-center">
              <button
                type="button"
                className="text-sm text-gray-600 underline disabled:text-gray-400 mt-2"
                onClick={handleResendOtp}
                disabled={otpTimer > 0}
              >
                {otpTimer > 0 ? `Resend OTP in ${otpTimer}s` : "Resend OTP"}
              </button>
            </div>
          </form>
        )}
        {step === 3 && (
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Thank You!</h2>
            <p className="text-gray-700 mb-2">Our representative will be in touch with you soon.</p>
            <button onClick={onClose} className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded transition">Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal; 