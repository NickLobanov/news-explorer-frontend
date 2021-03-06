import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation ({ isLogged, darkType, menuType, authBtnClick, userName, closePopupWithMenu }) {


    return (
        <ul className={`nav nav_${menuType}`}>
            <li className={`nav__item nav__item_${menuType}`}>
                <NavLink to="/" activeClassName="nav__ref_active_main" className={`nav__ref nav__ref_${darkType} nav__ref_${menuType}`}>Главная</NavLink>
            </li>
            {isLogged && 
                <li className={`nav__item nav__item_${menuType}`}>
                    <NavLink to="/saved-news"
                        activeClassName="nav__ref_active_save"
                        className={`nav__save-article nav__ref nav__ref_${darkType} nav__ref_${menuType}`}
                        onClick={closePopupWithMenu}>Сохранённые статьи
                    </NavLink>
                </li>
            }
            <li className={`nav__item-button nav__item-button_${menuType}`}>
                <button className={`nav__button nav__button_${darkType} nav__button_${menuType} ${isLogged && `nav__button_exit nav__button_exit_${darkType}`}`}
                    onClick={authBtnClick}>{isLogged ? userName : 'Авторизироваться'}
                </button>
            </li>
        </ul>
    )
}

export default Navigation;