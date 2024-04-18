import React from 'react';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Amazon', 'Facebook', 'Netflix', 'Google'],
  datasets: [{
    label: "Your Stocks' Prices (USD)",
    data: [189.05, 523.16, 628.78, 160.79],
    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
    borderWidth: 1
  }]
};

const options = {
  scales: {
    x: {
      type: 'category',
    },
  },
};

const BarChart = () => {
  return (
    <div style={{ position: 'absolute', bottom: 0, left: 180, width: '100%', height: '70%' }}>
      <Link to="/" style={{ position: 'absolute', top: -200, right: 850 }}>Go back to Home</Link>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
