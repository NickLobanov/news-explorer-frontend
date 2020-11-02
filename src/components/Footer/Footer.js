import React from 'react';
import './Footer.css';
import NavigationFooter from '../NavigationFooter/NavigationFooter';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">&#169; 2020 Supersite, Powered by News API</p>
            <NavigationFooter />
        </footer>
    )
}

export default Footer;