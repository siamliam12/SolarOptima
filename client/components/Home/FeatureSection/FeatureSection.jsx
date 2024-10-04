"use client";

import React from "react";
import data from "@/data/features.json";

export default function Features() {
  const radius = 250; // Radius of the circle
  const angleStep = (2 * Math.PI) / data.features.length; // Angle between each feature

  return (
    <div className="min-h-[125vh] h-auto py-12 flex flex-col items-center justify-center bg-[#000000] text-white">
      <h1 className="text-3xl font-bold mb-28 text-center text-[#00c1d4] uppercase tracking-wider">
        Features
      </h1>
      <div className="relative w-full max-w-4xl h-96">
        <div className="absolute w-full h-full rounded-full bg-gradient-radial from-[#252525] to-[#0f0f0f] flex items-center justify-center">
          <div className="relative w-80 h-80 bg-gradient-radial from-[#252525] to-[#0f0f0f] rounded-full flex items-center justify-center">
            <h3 className="text-xl font-semibold text-center">Features</h3>
          </div>
          {data.features.map((feature, index) => {
            const angle = index * angleStep  + 180;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <div
                key={index}
                className="absolute w-48 h-40 bg-[#2A2A4A] rounded-lg flex flex-col items-center justify-center p-4 text-center shadow-lg transform transition-transform duration-300 hover:scale-110"
                style={{
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h4 className="text-lg font-semibold mb-2 text-[#00c1d4]">
                  {feature.title}
                </h4>
                <p className="text-sm text-[#b5b5b5]">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}