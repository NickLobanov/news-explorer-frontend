import React from 'react';
import './PopupWithForm.css';
import * as mainApi from '../../utils/MainApi';

function PopupWithForm({ isOpen, isClose, isLogged }) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [signup, setSignup] = React.useState(true);
    const [emailError, setEmailError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [nameError, setNameError] = React.useState('')
    const [formValid, setFormValid] = React.useState(false);

    React.useEffect(() => {
        if (emailError || passwordError || nameError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError, nameError])

    function changeEmail(evt) {
        setEmail(evt.target.value)
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(evt.target.value).toLowerCase())) {
            setEmailError('Неправильный формат Email')
        } else {
            setEmailError('')
        }
    }

    function changePassword(evt) {
        setPassword(evt.target.value)
        if (evt.target.value.length < 8) {
            setPasswordError('пароль должен быть длиннее 8 символов')
        } else {
            setPasswordError('')
        }
    }

    function changeName(evt) {
        setName(evt.target.value)
        if (evt.target.value.length < 2) {
            setNameError('Имя должно быть больше 2 символов')
        } else {
            setNameError('')
        }
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
                    isLogged()
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
        setEmail('');
        setPassword('');
        setName('');
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
                            value={email}
                            required
                        />
                        {emailError && <p className="popup__label popup__label_err">{emailError}</p>}
                    </label>
                    
                    <label className="popup__label">Пароль
                        <input type="password"
                            className="popup__input"
                            placeholder="Введите пароль"
                            onChange={changePassword}
                            value={password}
                            required
                        />
                        {passwordError && <p className="popup__label popup__label_err">{passwordError}</p>}
                    </label>
                   
                    { !signup && 
                        <label className="popup__label">Имя
                            <input type="text"
                                className="popup__input"
                                placeholder="Введите свое имя"
                                onChange={changeName}
                                value={name}
                                required
                            />
                            {nameError && <p className="popup__label popup__label_err">{nameError}</p>}
                        </label>
    
                    }
                    <button disabled={!formValid} className={`popup__button ${!formValid && 'popup__button_disabled'}`}>{signup ? "Вход" : "Зарегистрироваться"}</button>
                    <p className="popup__text">или <span className="popup__link" onClick={switchPopup}>{signup ? "Зарегистрироваться" : "Вход"}</span></p>
                </div>
                <button className="popup__close" type="button" onClick={handleClose}></button>
            </form>
        </div>
    )
}

export default PopupWithForm;