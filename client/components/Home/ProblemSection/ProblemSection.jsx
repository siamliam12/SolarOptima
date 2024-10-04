"use client";

import React from "react";
import data from "@/data/problem.json";

function ProblemSection() {
  return (
    <div className="p-8 bg-[#0A0A23] text-white">
      <h1 className="text-4xl font-bold text-center mb-4">{data.title}</h1>
      <p className="text-lg text-center mb-8">{data.description}</p>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.cards.map((card, index) => (
        <div
          key={index}
          className="bg-secondary p-4 rounded-lg shadow-lg text-white"
        >
          <div className="bg-[#190E4F] p-4 rounded-t-lg flex justify-center">
            <img
              src={card.image}
              alt={card.title}
              className="w-24 h-24 object-cover m-2"
            />
          </div>
          <div className="p-4 bg-gradient-to-br from-[#0B0B43] to-[#0A0A23] rounded-b-lg">
            <h2 className="text-xl text-center font-semibold mb-2 text-white">
              {card.title}
            </h2>
            {/* <p className="text-white">{card.description}</p> */}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default ProblemSection;
