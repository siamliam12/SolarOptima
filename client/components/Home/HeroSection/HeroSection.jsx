import React from "react";

function HeroSection() {
  return (
    <div className="bg-transparent flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-6xl font-normal w-1/2 leading-snug mb-4 text-center text-white">
        Optimize your Crop Growth using SolarOptima
      </h1>
      <p className="text-lg mb-6 text-center w-3/5 my-3 text-white">
        Unlock the potential of your crops with SolarOptima. Using NASA datasets
        and machine learning, it provides real-time insights on solar radiation,
        weather, and soil conditions. Empower your farming decisions and
        maximize crop yields with data-driven precision.{" "}
      </p>
      <div className="flex space-x-4">
        <a className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700" href="/dashboard">
          Try SolarOptima
        </a>
        <a className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700" href="/login">
          Sign In
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
