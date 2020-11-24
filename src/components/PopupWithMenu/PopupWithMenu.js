import React from 'react';
import './PopupWithMenu.css';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/currentUserContext';

function PopupWithMenu({isLogged, menuType, isOpen, isClose, signOut}) {

    const currentUser = React.useContext(CurrentUserContext)

    return (
        <div className={`popup-menu ${isOpen && `popup-menu_active`}`}>
            <div className="popup-menu__container">
                <Header menuType={menuType} burgerMenuClick={isOpen} isMobileMenuActive={isOpen} isClose={isClose}/>
                <Navigation isLogged={isLogged} menuType={menuType} userName={currentUser.name} authBtnClick={signOut} closePopupWithMenu={isClose}/>
            </div>
        </div>
    )
}

export default PopupWithMenu;