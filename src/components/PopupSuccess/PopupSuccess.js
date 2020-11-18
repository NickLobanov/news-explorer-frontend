import React from 'react';
import './PopupSuccess.css'

function PopupSuccess({ isOpen, isClose, openAuthPopup }) {
    return (
        <div className={`popup ${isOpen && `popup_active`}`}>
            <form className="popup__form">
                <div className="popup__wrap">
                    <h2 className="popup__title">Пользователь успешно зарегистрирован!</h2>
                    <p className="popup__link popup__link_success" onClick={openAuthPopup}>Войти</p>
                </div>
                <button className="popup__close" type="button" onClick={isClose}></button>
            </form>
        </div>
    )
}

export default PopupSuccess;