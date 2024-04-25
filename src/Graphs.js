// Have a Pie Chart in the home page
// Have clickable compoonets where once you click on those components it takes you to another page where there are three different charts
// have this done by next week

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';

const Graphs = () => {
    // Register required chart elements
    ChartJS.register(LineElement, PointElement, Title, Tooltip, Legend);

    // Sample data for demonstration
    const data = {
        'Facebook': {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Facebook Stock Prices',
                data: [165, 170, 180, 175, 160, 158],
                fill: false,
                borderColor: 'rgba(66, 103, 178, 0.5)',
                tension: 0.1
            }]
        },
        'Google': {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Google Stock Prices',
                data: [1200, 1170, 1185, 1220, 1235, 1260],
                fill: false,
                borderColor: 'rgba(219, 68, 55, 0.5)',
                tension: 0.1
            }]
        },
        'Amazon': {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Amazon Stock Prices',
                data: [3100, 3200, 3300, 3150, 3080, 3050],
                fill: false,
                borderColor: 'rgba(255, 153, 0, 0.5)',
                tension: 0.1
            }]
        },
    };

    // Define a state to keep track of the active graph
    const [activeGraph, setActiveGraph] = useState('Facebook');

    // Fullscreen graph style
    const graphStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    };

    // Function to handle graph switching
    const switchGraph = (graphName) => {
        setActiveGraph(graphName);
    };

    return (
        <div style={graphStyle}>
            {/* Display the active graph */}
            <h2>{activeGraph}</h2>
            <Line data={data[activeGraph]} />

            {/* Navigation buttons */}
            <div style={{ position: 'fixed', bottom: 20 }}>
                <button onClick={() => switchGraph('Facebook')}>Facebook</button>
                <button onClick={() => switchGraph('Google')}>Google</button>
                <button onClick={() => switchGraph('Amazon')}>Amazon</button>
            </div>
        </div>
    );
};

export default Graphs;
