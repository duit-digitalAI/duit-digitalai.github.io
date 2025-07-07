import React, { useState } from "react";

const Legal = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-8 py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Legal Information
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Important legal documents and policies for Duit Digital
          </p>
        </div>
      </section>

      {/* Legal Documents Section */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Privacy Policy */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🔒</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Privacy Policy</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Learn how we collect, use, and protect your personal information when you use our services.
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Data collection and usage</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Information sharing practices</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Your rights and choices</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Security measures</span>
                </div>
              </div>
              <button onClick={() => setShowPrivacy(true)} className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded transition">
                Read Privacy Policy
              </button>
            </div>

            {/* Terms and Conditions */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Terms and Conditions</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Understand the terms and conditions that govern your use of our platform and services.
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Service usage terms</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>User responsibilities</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Limitation of liability</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Dispute resolution</span>
                </div>
              </div>
              <button onClick={() => setShowTerms(true)} className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded transition">
                Read Terms and Conditions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative shadow-lg overflow-y-auto max-h-[90vh]">
            <button onClick={() => setShowPrivacy(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold">&times;</button>
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <div className="text-gray-700 space-y-4 text-sm md:text-base">
              <p>At Duit Digital Private Ltd. we are strongly committed to protect the personal and financial information of our customers and we endeavour to protect it from unauthorized use.</p>
              <h3 className="font-semibold mt-4">Collection of Information</h3>
              <p>While using Duit Digital website/mobile app or availing the products and services vide the online application forms/mobile app and questionnaires, Duit Digital Private Limited may become privy to the personal information of its customers, including information that is of a confidential nature.</p>
              <p>Duit Digital Private Limited is strongly committed in protecting the privacy of its customers and has taken all necessary and reasonable measures to protect the confidentiality of the customer information and its transmission through the world wide web and it shall not be held liable for disclosure of the confidential information when in accordance with this Privacy Commitment or in terms of the agreements, if any, with the Customers.</p>
              <p>In addition, like most Sites/mobile apps, Duit Digital Private Limited will use small bits of data called “cookies” stored on the users’ computers/mobile phones to stimulate a continuous connection. “Cookies” lets us store information about customers’ preferences and passwords and allow customers to move to different pages of our secure Site/mobile app without having to re-enter their password information. Any information collected is stored in secure databases protected via a variety of access controls and is treated as confidential information by Duit Digital Private Limited.</p>
              <h3 className="font-semibold mt-4">Use and disclosure of Personal & Financial Information</h3>
              <p>Duit Digital Private Limited will protect customer's personal information against unauthorized use, dissemination or publication in the same manner in which Duit Digital Private Limited would protect its confidential information of like nature over website/mobile app. However, under certain conditions Duit Digital Private Limited may share this information.</p>
              <p>Duit Digital Private Limited may use the personal information to improve its services to customers and to keep customers updated about our new products or other information that may be of interest to the customer.</p>
              <p>Duit Digital Private Limited may share information during normal business operations, such as providing services the customer has subscribed for, and any activity related to these services such as collection of fee/charges. It may become necessary for Duit Digital Private Limited to disclose customer personal information to its agents and contractors during normal business operations for the above referred purpose. However, these parties would be required to use the information obtained from Duit Digital Private Limited for such purposes exclusively.</p>
              <h3 className="font-semibold mt-4">Exclusions from Privacy Policy</h3>
              <p>Other websites/mobile app that customers may access via website/mobile app may have different privacy policies and access to such web sites/mobile app will not be subject to this privacy policy. Duit Digital Private Limited strongly recommends that customers read the privacy statement of each such websites/mobile apps/partners to find out how they protect customer personal information.</p>
              <h3 className="font-semibold mt-4">Amendments</h3>
              <p>Due to changes in legislation or enhancements to functionality and content on the website, Duit Digital Private Limited may make changes to privacy policy (without being obliged to do so) and would reflect those changes in this privacy policy statement. Hence customers are requested to go through the privacy policy statement on a periodic basis.</p>
              <h3 className="font-semibold mt-4">Non Binding</h3>
              <p>Please note that this privacy policy does not create any contractual or other legal rights in or on behalf of any party, nor is it intended to do so.</p>
              <h3 className="font-semibold mt-4">Prohibited Actions</h3>
              <p>While using Duit Digital Private Limited website/mobile app, the customer agrees not to, by any means (including hacking, cracking or defacing any portion of the Site) indulge in illegal or unauthorized activities including the following:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use the website/mobile app/application portal for unlawful purposes.</li>
                <li>Engage in spamming or flooding.</li>
                <li>Transmit any software or other materials that contain any virus, time bomb, or other harmful or disruptive component.</li>
                <li>Remove any copyright, trademark or other proprietary rights notices contained on the website/mobile app.</li>
                <li>Harvest or collect information about website/mobile app/ application portal users without their express consent.</li>
                <li>Restrict or inhibit any authorized user from using Duit Digital Private Limited website/mobile app/ application portal.</li>
                <li>"Frame" or "mirror" any part of the website/mobile app/ application portal without our prior authorization.</li>
                <li>Use any device, application or process to retrieve, index, "data mine" or in any way reproduce or circumvent the navigational structure or presentation of the website/mobile app/ application portal.</li>
                <li>Permit or help anyone without access to the Site to use the Site through your username and password or otherwise.</li>
              </ul>
              <h3 className="font-semibold mt-4">Liability Disclaimer</h3>
              <p>Under no circumstances shall Duit Digital Private Limited be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site.</p>
              <h3 className="font-semibold mt-4">Contact Us</h3>
              <p>If you have any concerns regarding our Privacy Policy, please reach out to us at <a href="mailto:info@duit.digital" className="text-blue-600 underline">info@duit.digital</a>.</p>
            </div>
          </div>
        </div>
      )}

      {/* Terms and Conditions Modal */}
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative shadow-lg overflow-y-auto max-h-[90vh]">
            <button onClick={() => setShowTerms(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold">&times;</button>
            <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
            <div className="text-gray-700 space-y-4 text-sm md:text-base">
              <h3 className="font-semibold mt-4">1. Acceptance of Terms</h3>
              <p>By accessing or using the Duit AI Loan Bot ("Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree, please refrain from using the Service.</p>

              <h3 className="font-semibold mt-4">2. Services Provided</h3>
              <p>Duit AI Loan Bot assists users in exploring loan options, comparing offers, and applying for credit through various financial institutions. The Service provides information but does not guarantee loan approvals.</p>

              <h3 className="font-semibold mt-4">3. Eligibility</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Be at least 18 years old.</li>
                <li>Be an Indian citizen or resident with valid KYC documentation.</li>
                <li>Provide accurate and complete information for loan processing.</li>
              </ul>

              <h3 className="font-semibold mt-4">4. User Consent and Data Usage</h3>
              <p>By using the Service, you explicitly agree to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide personal, financial, and contact details for loan processing.</li>
                <li>Allow Duit Digital to share your information with partner banks, NBFCs, and financial institutions for loan evaluation and approval.</li>
                <li>Receive SMS, WhatsApp messages, emails, and calls regarding your loan application status, financial products, and related services.</li>
              </ul>

              <h3 className="font-semibold mt-4">5. Consent for Marketing and Communication</h3>
              <p>By using Duit AI Loan Bot, you authorize Duit Digital and its affiliates to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Contact you via SMS, WhatsApp, phone calls, emails, and other digital channels for promotional offers, even if your number is registered under the Do Not Disturb (DND) list.</li>
                <li>Send promotional messages related to loans, credit cards, insurance, and other financial products.</li>
                <li>Share limited user data with third-party lenders and partners for exclusive offers.</li>
                <li>Allow recorded interactions for quality control and dispute resolution.</li>
              </ul>
              <p>If you wish to opt out of promotional communications, you can send an email to <a href="mailto:info@duit.digital" className="text-blue-600 underline">info@duit.digital</a> with the subject "Unsubscribe." However, transactional messages related to loan applications cannot be opted out of.</p>

              <h3 className="font-semibold mt-4">6. No Guarantee of Loan Approval</h3>
              <p>Loan approvals and terms are solely at the discretion of lending institutions. Duit Digital does not influence lending decisions.</p>

              <h3 className="font-semibold mt-4">7. Liability Disclaimer</h3>
              <p>Duit Digital is not responsible for:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Any financial loss due to misinformation or unauthorized use of the Service.</li>
                <li>Errors or delays caused by partner banks or lenders.</li>
                <li>Technical issues that may disrupt service availability.</li>
              </ul>

              <h3 className="font-semibold mt-4">8. Privacy Policy</h3>
              <p>All user data is processed in compliance with applicable laws and is protected as per Duit Digital’s Privacy Policy.</p>

              <h3 className="font-semibold mt-4">9. Governing Law and Jurisdiction</h3>
              <p>These Terms shall be governed by Indian laws. Any disputes shall be subject to the jurisdiction of courts in Mumbai, India.</p>

              <h3 className="font-semibold mt-4">10. Changes to Terms</h3>
              <p>Duit Digital reserves the right to modify these Terms at any time. Users will be notified of any significant changes via SMS or email.</p>
            </div>
          </div>
        </div>
      )}

      {/* Last Updated Section */}
      <section className="px-8 py-8 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            Last updated: March 15, 2025
          </p>
          <p className="text-sm text-gray-500 mt-2">
            These documents are subject to change. Please check back regularly for updates.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Legal; 