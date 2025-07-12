import React from "react";

const partners = [
  {
    name: "Bajaj Finserv",
    logo: "/images/bajaj-logo.png",
    description: `Grievance Redressal Officer: Mr. Manish Bhargav<br />
Helpline: 022 41880301<br />
Email: grievanceredressalteam@bajajfinserv.in`
  },
  {
    name: "Aditya Birla Capital",
    logo: "/images/aditya-birla-logo.png",
    description: `Address: R Tech Park, 15th Floor, Nirlon Complex, Goregaon East, Mumbai - 400 063<br />
Contact No: 18002097000<br />
Email: care.digitalfinance@adityabirlacapital.com`
  },
  {
    name: "Poonawalla Fincorp",
    logo: "/images/poonawalla-logo.png",
    description: `Grievance Redressal Officer: Rati Mundra<br />
Grievance Email: grievance@poonawallafincorp.com<br />
Grievance Phone: 020-67808090<br />
Customer Care Email: customercare@poonawallafincorp.com<br />
Customer Care Phone: 020-67808090<br />
Address: Plot No 11, 5th Floor, Prem Dohil Sadan, Rajendra Place, New Delhi -110008.`
  },
];

function makeEmailsClickable(html) {
  return html.replace(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g, '<a href="mailto:$1" class="text-blue-600 underline">$1</a>');
}

const Partners = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4 bg-white">
    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Partners</h1>
    <p className="text-lg text-gray-700 max-w-2xl text-center mb-10">
      Our lending partners are the backbone of our mission. They share our commitment to making financial services more accessible and customer-friendly.
    </p>
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch justify-items-center">
      {partners.map((p) => (
        <div key={p.name} className="flex flex-col items-start bg-gray-50 rounded-xl shadow p-6 w-full h-full">
          <img src={p.logo} alt={p.name} className="object-contain w-full h-20 mb-4" />
          <h2 className="text-lg font-semibold mb-2 w-full text-center">{p.name}</h2>
          <p className="text-sm text-gray-600 break-words max-w-full w-full" style={{textAlign: 'left', whiteSpace: 'normal'}} dangerouslySetInnerHTML={{ __html: makeEmailsClickable(p.description) }} />
        </div>
      ))}
    </div>
  </section>
);

export default Partners; 