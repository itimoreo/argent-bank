import React, { useState } from 'react';
import Header from '../Composant/Header';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const data = await response.json();
            console.log('Data:', data);

            if (!response.ok) {
                setError('Login failed');
                console.log('Login failed');
            } else {
                console.log('Login successful');
                localStorage.setItem('token', data.body.token); // add this line
                navigate(`/dashboard/${data.body.userId}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="text" value={email} onChange={handleEmailChange} />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} />
                <br />
                <button type="submit">Login</button>
            </form>
            <div>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};

export default LoginPage;