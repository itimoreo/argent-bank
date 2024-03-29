import React from 'react';
import { Link } from 'react-router-dom';

import ArgentBankLogo from '../assets/img/argentBankLogo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';

const UserIcon = () => {
    const token = localStorage.getItem('token');
    const isLoggedIn = !!token;

    const handleLogout = () => {
        localStorage.removeItem('token');
    };

    return (
        <div style={{color:'#2c3e50'}}>
            <FontAwesomeIcon icon={faUserCircle} />
            <Link to={isLoggedIn ? "/" : "/login"} onClick={isLoggedIn ? handleLogout : null} style={{marginLeft: '10px',marginRight: '0.5rem', fontSize:'16px', textDecoration: 'none', color: 'inherit'}}>
                {isLoggedIn ? 'Sign Out' : 'Sign In'}
            </Link>
        </div>
    );
}

const Header = () => {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding:'5px 20px', fontWeight:'bold' }}>
            <img src={ArgentBankLogo} alt="Logo de la banque" style={{ width: '200px' }} />
            <UserIcon />
        </header>
    );
};

export default Header;