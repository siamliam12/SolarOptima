"use client";

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ColumnChart = ({ title, data }) => {
  // Transform the data into labels and data points
  const labels = Object.keys(data);
  const values = Object.values(data);

  // Normalize the data for better visualization
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const normalizedValues = values.map(value => ((value - minValue) / (maxValue - minValue)) * 100);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset',
        data: normalizedValues,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: true,
        text: title,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const index = context.dataIndex;
            const actualValue = values[index];
            return `Value: ${actualValue}`;
          },
        },
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Date',
        },
        ticks: {
          display: false, // Hide x-axis labels
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Normalized Value',
        },
        ticks: {
          display: false, // Hide y-axis labels
        },
        beginAtZero: true, // Ensure the y-axis starts at zero
      },
    },
  };

  return (
    <div className="w-full h-[500px]"> {/* Adjust the width and height as needed */}
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ColumnChart;