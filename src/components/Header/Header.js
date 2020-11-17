import React from 'react';
import './Header.css'
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Header({ isLogged, darkType, menuType, authBtnClick, burgerMenuClick, isMobileMenuActive, isClose }) {

    return (
        <header className={`header header_${menuType}`}>
            <div className="header__container">
                <Link to="/" className={`header__logo header__logo_${darkType}`}>NewsExplorer</Link>
                <Navigation isLogged={isLogged} darkType={darkType} authBtnClick={authBtnClick} userName="Николай"/>
                <div className={`header__burger-menu ${isMobileMenuActive && `header__burger-menu_active`}`} onClick={burgerMenuClick}></div>
                <div className={`header__close-button ${isMobileMenuActive && `header__close-button_active`}`} onClick={isClose}></div>
            </div>
        </header>
    )
}

export default Header;