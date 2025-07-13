import React, { useState } from "react";
import { submitContactRequest } from '../api';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    try {
      const response = await submitContactRequest(form);
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="px-8 py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-8">We'd love to hear from you! Reach out with your questions, feedback, or partnership inquiries.</p>
        </div>
      </section>
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          {submitted ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Thank You!</h2>
              <p className="text-gray-700 mb-2">Your message has been received. Our team will get in touch with you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    maxLength={15}
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-gray-700 font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 min-h-[100px]"
                    required
                  />
                </div>
              </div>
              {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
              <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded transition">Send Message</button>
            </form>
          )}
          <div className="mt-12 border-t pt-8 text-gray-600 text-sm text-left space-y-4">
            <div>
              <span className="font-semibold block text-gray-800 mb-1">Contact Information</span>
              <div className="mb-1"><span className="font-medium">Phone</span><br /><a href="tel:+918451048788" className="text-blue-600 underline">+91 8451048788</a></div>
              <div className="mb-1"><span className="font-medium">Email</span><br /><a href="mailto:info@duit.digital" className="text-blue-600 underline">info@duit.digital</a></div>
            </div>
            <div>
              <span className="font-semibold block text-gray-800 mb-1">Corporate Address</span>
              <div>WeWork Oberoi Commerz II,<br />No 2, 1 Mohan Gokhale Rd, 1st & 20th Floor, Aarey Milk Colony,<br />Mumbai 400063</div>
            </div>
            <div>
              <span className="font-semibold block text-gray-800 mb-1">Registered Address</span>
              <div>Duit Digital Private Limited - E-303/Interface Height,<br />New Link Road, Malad West Dely, Mumbai 400064</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 