import React from 'react';
import Header from '../Composant/Header';
import Footer from '../Composant/Footer';

const Dashboard = () => {
    const balance = 1000; // Replace with your actual balance

    return (
        <div>
            <Header />
            <h1>Welcome to Your Bank Dashboard</h1>
            <p>Your current balance is: ${balance}</p>
            <Footer />
        </div>
    );
};

export default Dashboard;