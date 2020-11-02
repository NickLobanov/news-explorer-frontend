import React from 'react';
import './PopupWithForm.css';

function PopupWithForm() {
    return(
        <div className="popup">
            <form className="popup__form">
                <label className="popup__text">Email<input type="email" className="popup__input" placeholder="Введите почту"/></label>
                <label className="popup__text">Пароль<input type="password" className="popup__input" placeholder="Введите пароль"/></label>
            </form>
        </div>
    )
}

export default PopupWithForm;