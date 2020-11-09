import React from 'react';
import './PopupWithMenu.css';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header'

function PopupWithMenu({isLogged, menuType}) {
    return (
        <div className="popup-menu">
            <div className="popup-menu__container">
                <Header menuType={menuType}/>
                <Navigation isLogged={isLogged} menuType={menuType}/>
            </div>
        </div>
    )
}

export default PopupWithMenu;