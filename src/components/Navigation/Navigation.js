import React from 'react';
import './Navigation.css';

function Navigation () {
    return (
        <ul className="nav">
            <li className="nav__item">Главная</li>
            <li className="nav__item"><button className="nav__button">Авторизироваться</button></li>
        </ul>
    )
}

export default Navigation;