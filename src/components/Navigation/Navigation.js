import React from 'react';
import './Navigation.css';

function Navigation ({ isLogged }) {
    return (
        <ul className="nav">
            <li className="nav__item nav__item_dark">Главная</li>
            {isLogged && <li className="nav__item nav__save-article nav__item_dark">Сохранённые статьи</li>}
            <li className="nav__item-button"><button className="nav__button nav__button_dark">Авторизироваться</button></li>
        </ul>
    )
}

export default Navigation;