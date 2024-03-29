import React from 'react';
import '../css/Features.css';
import ChatIcon from '../assets/img/icon-chat.png';
import MoneyIcon from '../assets/img/icon-money.png';
import SecurityIcon from '../assets/img/icon-security.png';

const Features = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'row',  }}>
            <div className='feature-item'>
                <img src={ChatIcon} alt="Chat Icon" />
                <h3 className='feature-item-title'>You are our #1 priority</h3>
                <p>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
            </div>
            <div className='feature-item'>
                <img src={MoneyIcon} alt="Money Icon" />
                <h3 className='feature-item-title'>More savings means higher rates</h3>
                <p>The more you save with us, the higher your interest rate will be!</p>
            </div>
            <div className='feature-item'>
                <img src={SecurityIcon} alt="Security Icon" />
                <h3 className='feature-item-title'>Security you can trust</h3>
                <p>We use top of the line encryption to make sure your data and money is always safe.</p>
            </div>
        </div>
    );
};

export default Features;