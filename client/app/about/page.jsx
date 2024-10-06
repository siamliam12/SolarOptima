"use client";

import Footer from "@/components/Home/Footer/Footer";
import Navbar from "@/components/About/Navbar/Navbar";
import React from "react";

function Page() {
  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">SolarOptima</h1>
        <p className="text-lg mb-6">
          We created Solar Optima, a web tool that uses data from NASA Earth
          observation missions to give farmers real-time, machine
          learning-driven insights on crop suggestions, yield forecasts, and
          irrigation scheduling. Our software assists farmers in making
          well-informed, data-driven decisions by combining information about
          location, soil moisture, and meteorological conditions.
        </p>
        <h2 className="text-3xl font-semibold mb-4">
          CropMatch: Smart Crop Recommendations for Your Land
        </h2>
        <p className="text-lg mb-6">
          CropMatch analyzes critical factors like location, soil moisture,
          temperature, and nutrient levels (Nitrogen, Phosphorus, Potassium) to
          recommend the most suitable crops for your land. By integrating
          real-time climate data and detailed soil test results (including pH,
          evapotranspiration, and organic content), it ensures you grow the
          right crops for optimal yield and sustainability. With tailored,
          data-driven insights, CropMatch helps farmers make informed, efficient
          decisions to maximize land productivity.
        </p>
        <h2 className="text-3xl font-semibold mb-4">
          EcoGrow: Crop Yield Prediction for Smarter Farming
        </h2>
        <p className="text-lg mb-6">
          EcoGrow leverages advanced data analytics to predict crop yields,
          enabling farmers to plan effectively and allocate resources
          efficiently. By analyzing soil conditions, weather patterns, and
          historical data, EcoGrow provides accurate yield forecasts. This helps
          farmers optimize planting schedules, manage resources like water and
          fertilizers, and make informed decisions to maximize productivity and
          profitability.
        </p>
        <h2 className="text-3xl font-semibold mb-4">
          Dashboard: Visual Insights for Smarter Farming Decisions
        </h2>
        <p className="text-lg mb-6">
          The Dashboard offers an intuitive interface that visualizes essential
          metrics, trends, and analyses. It helps farmers translate complex
          data—such as soil conditions, weather patterns, and crop
          performance—into actionable insights. With clear charts and graphs,
          farmers can easily monitor and understand their data, improving
          decision-making and farm management.
        </p>
        <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
        <p className="text-lg mb-6">
          Solar Optima combines NASA satellite and geospatial data with ML to
          analyze environmental factors affecting crops and water availability.
          The app simplifies this data into actionable insights and
          recommendations. Farmers input their farm details, and the app
          delivers personalized guidance on crop choices, resource management,
          and more—all accessible from any device.
        </p>
        <h2 className="text-3xl font-semibold mb-4">🌟 Benefits</h2>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            Improved Decision-Making: ML-driven insights and real-time data help
            farmers anticipate challenges and take proactive measures.
          </li>
          <li>
            Enhanced Productivity: Optimize crop selection and resource use for
            higher yields and better farm efficiency.
          </li>
          <li>
            Sustainability: Efficient water management and data-backed decisions
            promote long-term agricultural sustainability.
          </li>
          <li>
            Resilience: The app predicts weather and water risks, helping
            farmers adapt to climate change and safeguard their livelihoods.
          </li>
        </ul>
        <h2 className="text-3xl font-semibold mb-4">Project Video</h2>
        <p className="text-lg mb-6">
          Watch our project video on YouTube:{" "}
          <a
            href="https://www.youtube.com/watch?v=EuQNrsUm4KY"
            className="text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            SolarOptima Project Video
          </a>
        </p>
        <h2 className="text-3xl font-semibold mb-4">API Reference</h2>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            <a href="https://power.larc.nasa.gov/" className="text-blue-400">
              NASA POWER
            </a>
          </li>
          <li>
            <a
              href="https://www.earthdata.nasa.gov/learn/pathfinders/disasters/floods-data-pathfinder/find-data#flood-inundation"
              className="text-blue-400"
            >
              NASA Floods Data Pathfinder
            </a>
          </li>
          <li>
            <a
              href="https://www.earthdata.nasa.gov/learn/pathfinders/disasters/extreme-heat-data-pathfinder/find-data#temperature"
              className="text-blue-400"
            >
              Extreme Heat Data Pathfinder - Find Data
            </a>
          </li>
          <li>
            <a
              href="https://www.kaggle.com/datasets/atharvaingle/crop-recommendation-dataset"
              className="text-blue-400"
            >
              Crop Recommendation
            </a>
          </li>
          <li>
            <a
              href="https://ourworldindata.org/crop-yields"
              className="text-blue-400"
            >
              Crop Yield data
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Page;