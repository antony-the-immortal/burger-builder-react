import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import './Logo.scss';

const logo = () => {
    return (
        <div className='Logo'>
        <img src={burgerLogo}  alt='My Burger Logo'/>
        </div>
    )
}
export default logo;