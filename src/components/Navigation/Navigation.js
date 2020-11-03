import React from 'react';
import './Navigation.css';

function Navigation ({ isLogged, darkType }) {
    return (
        <ul className="nav">
            <li className={`nav__item nav__item_${darkType}`}>Главная</li>
            {isLogged && <li className={`nav__item nav__save-article nav__item_${darkType}`}>Сохранённые статьи</li>}
            <li className="nav__item-button"><button className={`nav__button nav__button_${darkType}`}>Авторизироваться</button></li>
        </ul>
    )
}

export default Navigation;