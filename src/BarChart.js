import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

const BarChart = () => {
  useEffect(() => {
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  }, []);

  const data = {
    labels: ['Amazon', 'Facebook', 'Netflix', 'Google'],
    datasets: [{
      label: 'Stock Prices (USD)',
      data: [189.05, 523.16, 628.78, 160.79],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  };

  const options = {
    scales: {
      x: {
        type: 'category', // Specify x-axis scale type as 'category'
      },
    },
  };

  return (
    <div style={{ position: 'absolute', bottom: 0, right: 0, width: '50%', height: '50%', marginBottom: 200 }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
