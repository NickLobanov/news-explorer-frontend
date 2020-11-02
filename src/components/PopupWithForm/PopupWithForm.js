import React from 'react';
import './PopupWithForm.css';

function PopupWithForm() {
    return(
        <div className="popup">
            <form className="popup__form">
                <h3 className="popup__title">Вход</h3>
                <label className="popup__label">Email<input type="email" className="popup__input" placeholder="Введите почту"/></label>
                <label className="popup__label">Пароль<input type="password" className="popup__input" placeholder="Введите пароль"/></label>
                <button className="popup__button">Войти</button>
                <p className="popup__text">или <span className="popup__link">Зарегистрироваться</span></p>
            </form>
        </div>
    )
}

export default PopupWithForm;