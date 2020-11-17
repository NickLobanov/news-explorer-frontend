import React from 'react';
import './PopupWithForm.css';
import * as mainApi from '../../utils/MainApi';

function PopupWithForm({ isOpen, isClose }) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [signup, setSignup] = React.useState(true)

    function changeEmail(evt) {
        setEmail(evt.target.value)
    }

    function changePassword(evt) {
        setPassword(evt.target.value)
    }

    function changeName(evt) {
        setName(evt.target.value)
    }

    function switchPopup() {
        setSignup(!signup)
    }

    //Авторизация пользователя
    function handleSubmitAuth(evt) {
        evt.preventDefault();
        if (!email || !password) {
            return
        }
        mainApi.authorization(email, password)
            .then((data) => {
                console.log(data)
                if(data.token) {
                    setEmail('');
                    setPassword('');
                }
            })
        
    }

    //Регистрация пользователя
    function handleSubmitReg(evt) {
        evt.preventDefault();
        if (!email || !password || !name) {
            return
        }
        mainApi.register(email, password, name)
            .then((res) => {
                console.log(res)
            })
        switchPopup()
    }

    function handleSubmit(evt) {
        if (signup) {
            handleSubmitAuth(evt)
        } else {
            handleSubmitReg(evt)
        }
    }

    function handleClose() {
        isClose()
    }

    return(
        <div className={`popup ${isOpen && `popup_active`}`}>
            <form className="popup__form" onSubmit={handleSubmit}>
                <div className="popup__wrap">
                <h3 className="popup__title">{signup ? "Вход" : "Зарегистрироваться"}</h3>
                    <label className="popup__label">Email
                        <input type="email"
                            className="popup__input"
                            placeholder="Введите почту"
                            onChange={changeEmail}
                            required
                        />
                    </label>
                    <label className="popup__label">Пароль
                        <input type="password"
                            className="popup__input"
                            placeholder="Введите пароль"
                            onChange={changePassword}
                            required
                        />
                    </label>
                    { !signup && 
                        <label className="popup__label">Имя
                            <input type="text"
                                className="popup__input"
                                placeholder="Введите свое имя"
                                onChange={changeName}
                                required
                            />
                        </label>
                    }
                    <button className="popup__button">{signup ? "Вход" : "Зарегистрироваться"}</button>
                    <p className="popup__text">или <span className="popup__link" onClick={switchPopup}>{signup ? "Зарегистрироваться" : "Вход"}</span></p>
                </div>
                <button className="popup__close" type="button" onClick={handleClose}></button>
            </form>
        </div>
    )
}

export default PopupWithForm;