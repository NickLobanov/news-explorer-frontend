import React from 'react';
import './Navigation.css';

function Navigation ({ isLogged }) {
    return (
        <ul className="nav">
            <li className="nav__item">Главная</li>
            {isLogged && <li className="nav__item nav__save-article">Сохранённые статьи</li>}
            <li className="nav__item-button"><button className="nav__button">Авторизироваться</button></li>
        </ul>
    )
}

export default Navigation;