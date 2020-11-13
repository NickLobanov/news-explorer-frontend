import React from 'react';
import './PopupWithMenu.css';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header'

function PopupWithMenu({isLogged, menuType, isOpen, isClose}) {
    return (
        <div className={`popup-menu ${isOpen && `popup-menu_active`}`}>
            <div className="popup-menu__container">
                <Header menuType={menuType} burgerMenuClick={isOpen} isMobileMenuActive={isOpen} isClose={isClose}/>
                <Navigation isLogged={isLogged} menuType={menuType} />
            </div>
        </div>
    )
}

export default PopupWithMenu;