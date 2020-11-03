import React from 'react';
import './Header.css'
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Header({ isLogged, darkType }) {
    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className={`header__logo header__logo_${darkType}`}>NewsExplorer</Link>
                <Navigation isLogged={isLogged} darkType={darkType}/>
            </div>
        </header>
    )
}

export default Header;