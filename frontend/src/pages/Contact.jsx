import React, { useEffect, useRef } from "react";

const Contact = () => {
  const bitrixMountRef = useRef(null);

  useEffect(() => {
    // Prevent double-inject in React 18 StrictMode (dev)
    if (document.querySelector('script[data-b24-form="inline/1/agxc12"]')) return;

    // Ensure our mount exists
    if (!bitrixMountRef.current) return;

    // Create the exact Bitrix embed script tag with required attributes AND inline IIFE
    const script = document.createElement('script');
    script.setAttribute('data-b24-form', 'inline/1/agxc12');
    script.setAttribute('data-skip-moving', 'true');
    script.innerHTML = "(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn.bitrix24.in/b34611287/crm/form/loader_1.js');";

    // Inject the script exactly where we want the form to appear
    bitrixMountRef.current.appendChild(script);
  }, []);

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
          {/* Bitrix24 CRM form renders inline here */}
          <div ref={bitrixMountRef}></div>

          <div className="mt-12 border-t pt-8 text-gray-600 text-sm text-left space-y-4">
            <div>
              <span className="font-semibold block text-gray-800 mb-1">Contact Information</span>
              <div className="mb-1"><span className="font-medium">Phone</span><br /><a href="tel:+918451048788" className="text-blue-600 underline">+91 8451048788</a></div>
              <div className="mb-1"><span className="font-medium">Email</span><br /><a href="mailto:info@duit.digital" className="text-blue-600 underline">info@duit.digital</a></div>
            </div>
            <div>
              <span className="font-semibold block text-gray-800 mb-1">Corporate Address</span>
              <div>WeWork Oberoi Commerz II,<br />International Business Park, Oberoi Garden City, Off Western Express Highway, Goregaon (East),<br />Mumbai, MH 400063, India</div>
            </div>
            <div>
              <span className="font-semibold block text-gray-800 mb-1">Registered Address</span>
              <div>Duit Digital Private Limited - Plot no-cts no-1406A/10,<br />Flt no-303/third floor/E wing/BL, Interface Heights, Off New Link Road, Malad West,<br /> Mumbai, Mumbai Suburban, Maharashtra, 400064</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;