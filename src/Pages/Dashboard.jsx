import React, {useEffect, useState} from 'react';

import Header from '../Composant/Header';
import Footer from '../Composant/Footer';

const Dashboard = () => {
    const balance = 1000; // Replace with your actual balance
    const [username, setUsername] = useState('')

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);


    return (
        <div>
            <Header />
            <h1>Welcome to Your Bank, {username}</h1>
            <p>Your current balance is: ${balance}</p>
            <Footer />
        </div>
    );
};

export default Dashboard;