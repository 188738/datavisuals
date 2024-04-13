// Have a Pie Chart in the home page
// Have clickable compoonets where once you click on those components it takes you to another page where there are three different charts
// have this done by next week

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';

const Graphs = () => {
    // Register required chart elements
    ChartJS.register(LineElement, PointElement, Title, Tooltip, Legend);

    // Sample data for demonstration
    const data1 = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Dataset 1',
            data: [65, 59, 80, 81, 56, 55],
            fill: false,
            borderColor: 'rgba(255, 99, 132, 0.5)',
            tension: 0.1
        }]
    };

    return (
        <div>
<h1 style={{ textAlign: 'center' }}>Graphs</h1>            <div style={{ position: 'absolute', bottom: 50, left: 0, width: '30%', height: '50%', marginLeft: 650, marginBottom: 400}}>
                <div style={{ flex: 1 }}>
                    <h2>Facebook</h2>
                    <Line data={data1} />
                    <h3>Google</h3>
                    <Line data={data1} />
                    <h4>Amazon</h4>
                    <Line data={data1} />
                </div>
                {/* Additional charts */}
            </div>
        </div>
    );
};

export default Graphs;
