import React from "react";

const PricingCard = ({ title, price, features }) => (
  <div className="rounded overflow-hidden shadow-lg bg-white">
    <div className="lg:w-[420px] lg:h-[400px] w-[300px] px-2 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <div className="font-bold text-5xl mb-4">Rp{price}</div>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className="text-gray-700 text-base mb-4">
            {feature}
          </li>
        ))}
      </ul>
    </div>
    <div className="px-6 py-4">
      <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
        Sign Up
      </button>
    </div>
  </div>
);

export default PricingCard;
