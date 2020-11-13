import React from 'react';
import './Footer.css';
import NavigationFooter from '../NavigationFooter/NavigationFooter';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__copyright">&#169; 2020 Supersite, Powered by News API</p>
                <NavigationFooter />
            </div> 
        </footer>
    )
}

export default Footer;