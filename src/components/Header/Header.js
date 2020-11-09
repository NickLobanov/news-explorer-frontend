import React from 'react';
import './Header.css'
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Header({ isLogged, darkType, menuType, authBtnClick }) {

    return (
        <header className={`header header_${menuType}`}>
            <div className="header__container">
                <Link to="/" className={`header__logo header__logo_${darkType}`}>NewsExplorer</Link>
                <Navigation isLogged={isLogged} darkType={darkType} authBtnClick={authBtnClick}/>
                <div className="header__burger-menu"></div>
            </div>
        </header>
    )
}

export default Header;