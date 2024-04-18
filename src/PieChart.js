import React from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Import 'chart.js/auto' to include all components

const PieChart = () => {
    // Register the 'arc' element
    Chart.register({ id: 'arc', element: 'arc' });

    const data = {
        labels: ['Amazon', 'Facebook', 'Netflix', 'Google'],
        datasets: [
            {
                label: 'My First Dataset',
                data: [0.2, 0.4, 0.25, 0.15],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
            },
        },
        responsive: true,
        maintainAspectRatio: false, // Set to false to customize chart dimensions
        width: 100, // Set custom width
        height: 100, // Set custom height
    };

    return (
        <div style={{ width: '200px', height: '200px', position: 'absolute', bottom: 600, left: 800, marginTop: 100 }}>
            <Pie data={data} options={options} />
        </div>
    );
};

export default PieChart;
