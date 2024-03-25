import React from 'react';
import ArgentBankLogo from '../assets/img/argentBankLogo.png';

const Header = () => {
    return (
        <header>
            <img src={ArgentBankLogo} alt="Logo de la banque" />
        </header>
    );
};

export default Header;