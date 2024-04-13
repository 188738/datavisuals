import React from 'react';


const Home = ({netWorth}) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Your net worth: {netWorth} </h1>
            <p style={{ textAlign: 'center' }}>Welcome to the Home Page</p>
        </div>
    );
}

export default Home;