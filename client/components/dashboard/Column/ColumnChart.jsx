"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ColumnChart = ({ title, data }) => {
  // Transform the data into labels and data points
  const labels = Object.keys(data);
  const values = Object.values(data);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Dataset",
        data: values,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        display: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true, // Show the legend
      },
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Value",
        },
        beginAtZero: true, // Ensure the y-axis starts at zero
      },
    },
  };

  return (
    <div className="w-full h-[500px]">
      {" "}
      {/* Adjust the width and height as needed */}
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ColumnChart;
