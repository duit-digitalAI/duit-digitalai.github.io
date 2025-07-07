import React from 'react';

const services = [
  { title: 'Service One', desc: 'Whatever you need.' },
  { title: 'Service Two', desc: 'Whenever you need.' },
  { title: 'Service Three', desc: 'Wherever you need.' },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-lg text-center">
              <h3 className="text-lg md:text-xl font-semibold">{s.title}</h3>
              <p className="mt-4 text-base md:text-lg">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}