"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SplineChart = ({title, chartData}) => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Surface Temperature',
        data: chartData,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.4, // This creates the spline effect
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
    },
    scales: {
      x: {
        display: false,
        title: {
          display: false,
          text: 'Month',
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

  return <Line data={data} options={options} />;
};

export default SplineChart;