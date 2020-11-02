import React from 'react';
import Navigation from '../Navigation/Navigation';
import './NavigationFooter.css';

function NavigationFooter() {
    return(
        <ul className="nav">
            <li className="nav__item nav__item_footer">Главная</li>
            <li className="nav__item nav__item_footer">Яндекс.Практикум</li>
            <li className="nav__item nav__item_footer">
                <div className="nav__wrap">
                    <a className="nav__link nav__link_github"></a>
                    <a className="nav__link nav__link_fb"></a>
                </div>
            </li>
        </ul>
    )
}

export default NavigationFooter;