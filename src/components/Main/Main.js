import React from 'react';
import './Main.css'
import Header from '../Header/Header';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';

function Main({ isLogged }) {
    return (
        <>
            <div className="main">
                <Header isLogged={isLogged}/>
                <form className="main__form">
                    <h1 className="main__title">Что творится в мире?</h1>
                    <p className="main__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
                    <div className="main__wrap">
                        <input className="main__input" type="text" placeholder="Введите тему новости"></input>
                        <button className="main__button">Искать</button>
                    </div>
                </form>
            </div>
            <NewsCardList typeButton="add" hintText="Войдите, чтобы сохранять статьи"/>
            <About />
        </>
    )
}

export default Main;