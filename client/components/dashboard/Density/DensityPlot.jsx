"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DensityPlot = ({ title, data1, data2, labels }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: data1,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.4, // This creates the spline effect
      },
      {
        label: 'Dataset 2',
        data: data2,
        fill: false,
        borderColor: 'rgba(192,75,75,1)',
        tension: 0.4, // This creates the spline effect
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Show the legend
      },
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      x: {
        display: false,
        title: {
          display: false,
          text: 'Month',
        },
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        },
      },
      y: {
        display: true,
        title: {
          display: false,
          text: 'Value',
        },
      },
    },
  };

  return (
    <div className="w-full h-[500px]"> {/* Adjust the width and height as needed */}
      <Line data={data} options={options} />
    </div>
  );
};

export default DensityPlot;