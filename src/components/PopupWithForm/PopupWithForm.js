import React from 'react';
import './PopupWithForm.css';

function PopupWithForm({isSignUp}) {
    return(
        <div className="popup">
            <form className="popup__form">
                <div className="popup__wrap">
                    <h3 className="popup__title">Вход</h3>
                    <label className="popup__label">Email<input type="email" className="popup__input" placeholder="Введите почту"/></label>
                    <label className="popup__label">Пароль<input type="password" className="popup__input" placeholder="Введите пароль"/></label>
                    { isSignUp && 
                        <label className="popup__label">Имя<input type="text" className="popup__input" placeholder="Введите свое имя"/></label>
                    }
                    <button className="popup__button">Войти</button>
                    <p className="popup__text">или <span className="popup__link">Зарегистрироваться</span></p>
                </div>
                <button className="popup__close" type="button"></button>
            </form>
        </div>
    )
}

export default PopupWithForm;