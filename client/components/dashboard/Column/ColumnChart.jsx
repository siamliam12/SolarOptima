"use client";

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ColumnChart = ({ title, labels, data1, data2 }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: data1,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Dataset 2',
        data: data2,
        backgroundColor: 'rgba(192, 75, 75, 0.6)',
        borderColor: 'rgba(192, 75, 75, 1)',
        borderWidth: 1,
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
        display: false,
        title: {
          display: false,
          text: 'Category',
        },
      },
      y: {
        display: false,
        title: {
          display: false,
          text: 'Value',
        },
        beginAtZero: true, // Ensure the y-axis starts at zero
      },
    },
  };

  return (
    <div className="w-full h-[500px]"> {/* Adjust the width and height as needed */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default ColumnChart;