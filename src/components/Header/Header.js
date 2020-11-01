import React from 'react';
import './Header.css'
import Navigation from '../Navigation/Navigation';

function Header({ isLogged }) {
    return (
        <header className="header">
            <h2 className="header__title header__title_dark">NewsExplorer</h2>
            <Navigation isLogged={isLogged}/>
        </header>
    )
}

export default Header;