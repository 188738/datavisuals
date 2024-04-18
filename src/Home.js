import React from 'react';
import { Link } from 'react-router-dom';

import PieChart from './PieChart';

const Home = ({ netWorth }) => {
    return (
        <div style={{ textAlign: 'center', width: '100%', height: '100%', marginBottom: 100, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ textAlign: 'center' }}>Your net worth: ${netWorth.toLocaleString()}</h1>
            <br />
            <Link to="/barchart">
                <h2>Want to see current stock prices of your investments?</h2>
            </Link>
            <br />
            <Link to="/graphs">
                <h3>Want to see the growth of your stocks?</h3>
            </Link>

            <div style={{ marginTop: 150, flex: 1, bottom: 0 }}> {/* Add margin to the top of the PieChart */}
            <br>
            
            
            
            
            
            </br>
            <br>
            
             </br>
                <PieChart />
            </div>
        </div>
    );
}

export default Home;
