import React from 'react';
import bankTree from '../assets/img/bank-tree.jpeg';

const Hero = () => {
    return (
        <div style={{ width: '100%', height: '400px', position: 'relative' }}>
            <img
                src={bankTree}
                alt="Image d'une plante avec des pièces de monnaie à la place de la terre."
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <section className='hero-content' style={{position: 'absolute',top:'80px', right: '0', background: 'white', padding: '20px', margin: '20px', textAlign: 'left'}}>
                <p style={{fontSize:'1.5rem' , fontWeight: 'bold'}}>No fees.</p>
                <p style={{fontSize:'1.5rem' , fontWeight: 'bold'}}>No minimum deposit.</p>
                <p style={{fontSize:'1.5rem' , fontWeight: 'bold'}}>High interest rates.</p>
                <p style={{fontSize:'1.2rem'}}>Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    );
};

export default Hero;