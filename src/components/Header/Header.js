import React from 'react';
import './Header.css'
import Navigation from '../Navigation/Navigation';

function Header({ isLogged, darkType }) {
    return (
        <header className="header">
            <h2 className={`header__title header__title_${darkType}`}>NewsExplorer</h2>
            <Navigation isLogged={isLogged} darkType={darkType}/>
        </header>
    )
}

export default Header;