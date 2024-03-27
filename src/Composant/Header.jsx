import React from 'react';
import { Link } from 'react-router-dom';

import ArgentBankLogo from '../assets/img/argentBankLogo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';


const UserIcon = () => {
    return (
        <div style={{color:'#2c3e50'}}>
            <FontAwesomeIcon icon={faUserCircle} />
            <Link to="/login" style={{marginLeft: '10px',marginRight: '0.5rem', fontSize:'16px', textDecoration: 'none', color: 'inherit'}}>Sign-in</Link>
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