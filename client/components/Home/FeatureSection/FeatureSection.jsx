"use client";

import React from "react";
import data from "@/data/features.json";

export default function Features() {
  return (
    <div className="min-h-screen py-12 flex flex-col items-center justify-center bg-[#000000] text-white">
      <h1 className="text-3xl font-bold mb-12 text-center text-white uppercase tracking-wider">
        Features
      </h1>
      <div className="flex flex-wrap justify-center gap-8 px-4 items-center w-[80%]">
        {data.features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#2A2A4A] rounded-lg flex flex-col items-center justify-center p-6 text-center shadow-lg transition-transform duration-300 hover:scale-105"
            style={{ width: "250px", height: "200px" }}
          >
            <h4 className="text-lg font-semibold mb-2 text-[#FFD700]">
              {feature.title}
            </h4>
            <p className="text-sm text-[#e0e0e0]">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}