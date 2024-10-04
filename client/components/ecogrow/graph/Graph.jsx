"use client";

import React from "react";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
// import 'chartjs-pl/ugin-datalabels';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const Graph = ({ data }) => {
  const chartData = {
    datasets: data.map((item, index) => ({
      label: item.crop,
      data: [{ x: item.temp, y: item.predicted_yield }],
      backgroundColor: `rgba(${index * 60}, ${index * 60}, 255, 0.6)`,
      borderColor: `rgba(${index * 60}, ${index * 60}, 255, 1)`,
      borderWidth: 1,
    })),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: (${context.raw.x}, ${context.raw.y})`;
          },
        },
      },
    },
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Temperature (°C)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Predicted Yield (tons/ha)",
        },
      },
    },
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg mb-4">
      <h2 className="text-2xl font-bold mb-2">Density Plot</h2>
      <div className="w-full h-96">
        <Scatter data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Graph;
