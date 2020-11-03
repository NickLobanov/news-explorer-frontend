import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation ({ isLogged, darkType }) {
    return (
        <ul className="nav">
            <li className="nav__item">
                <NavLink to="/" activeClassName="nav__ref_active_main" className={`nav__ref nav__ref_${darkType}`}>Главная</NavLink>
            </li>
            {isLogged && 
                <li className="nav__item">
                    <NavLink to="/saved-news"
                        activeClassName="nav__ref_active_save"
                        className={`nav__save-article nav__ref nav__ref_${darkType}`}>Сохранённые статьи
                    </NavLink>
                </li>
            }
            <li className="nav__item-button"><button className={`nav__button nav__button_${darkType}`}>Авторизироваться</button></li>
        </ul>
    )
}

export default Navigation;