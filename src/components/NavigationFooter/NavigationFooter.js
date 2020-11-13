import React from 'react';
import Navigation from '../Navigation/Navigation';
import './NavigationFooter.css';
import { Link } from 'react-router-dom';

function NavigationFooter() {
    return(
        <ul className="nav nav_footer">
            <li className="nav__item nav__item_footer"><Link to="/" className="nav__item-link">Главная</Link></li>
            <li className="nav__item nav__item_footer"><a href="https://praktikum.yandex.ru/" className="nav__item-link">Яндекс.Практикум</a></li>
            <li className="nav__item nav__item_footer">
                <div className="nav__wrap">
                    <a href="https://github.com/NickLobanov" className="nav__link nav__link_github"></a>
                    <a href="https://ru-ru.facebook.com/" className="nav__link nav__link_fb"></a>
                </div>
            </li>
        </ul>
    )
}

export default NavigationFooter;