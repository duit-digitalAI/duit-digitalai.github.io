import React from "react";

const products = [
  {
    icon: "/images/LAP.svg",
    title: "Loan Against Property",
    desc: "Need a large loan at affordable interest rates? Use your property to get the best loan against property offers from leading lenders.",
    cta: "Get Offers"
  },
  {
    icon: "/images/PL.svg",
    title: "Personal Loan",
    desc: "Looking for quick, unsecured financing? Compare the best personal loan offers from top banks and NBFCs.",
    cta: "Get Offers"
  }
];

const Products = ({ openAuthModal }) => (
  <section className="px-4 md:px-8 py-16 bg-white">
    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Our Products</h2>
    <p className="mb-8 text-gray-600 text-base md:text-lg text-center">
      Compare Personal Loan & Loan Against Property Offers — <span className="font-semibold">All in One Place</span>
    </p>
    <div className="flex flex-col md:flex-row gap-8 items-stretch">
      {products.map((p, i) => (
        <div key={i} className="flex-1 border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition bg-white flex flex-col items-center text-center">
          <img src={p.icon} alt={p.title} className="h-12 mb-4" />
          <h3 className="text-lg md:text-xl font-semibold mb-2">{p.title}</h3>
          <p className="text-gray-600 mb-6 text-sm md:text-base">{p.desc}</p>
          <button
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded transition w-full sm:w-auto justify-center"
            onClick={openAuthModal}
          >
            {p.cta} <span>→</span>
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default Products;