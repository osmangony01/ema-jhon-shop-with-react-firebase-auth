import React from 'react';
import './header.css';
import ActiveLink from '../ActiveLink/ActiveLink';


const Header = () => {

    return (
        <div className='header'>
            <div>
                <ActiveLink to="/"><img src="./images/Logo.svg" alt="" /></ActiveLink>
            </div>
            <div className='nav-link'>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/order">Order</ActiveLink>
                <ActiveLink to="/login">Login</ActiveLink>
                <ActiveLink to="/register">Sign Up</ActiveLink>
            </div>
        </div>
    );
};

export default Header;