import React from 'react';
import './Main.css'
import Header from '../Header/Header';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import * as newsApi from '../../utils/NewsApi';

function Main({ isLogged, authBtnClick, burgerMenuClick, isMobileMenuActive }) {

    const [keyword, setKeyword] = React.useState('');
    const [cards, setCards] = React.useState([]);

    function handleInput(evt) {
        setKeyword(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        newsApi.getNews(keyword)
            .then((data) => {
                setCards(data.articles)
            })
    }

    return (
        <>
            <div className="main">
                <Header isLogged={isLogged} authBtnClick={authBtnClick} burgerMenuClick={burgerMenuClick} isMobileMenuActive={isMobileMenuActive}/>
                <form className="main__form" onSubmit={handleSubmit}>
                    <h1 className="main__title">Что творится в мире?</h1>
                    <p className="main__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
                    <div className="main__wrap">
                        <input className="main__input" type="text" placeholder="Введите тему новости" onChange={handleInput}></input>
                        <button className="main__button">Искать</button>
                    </div>
                </form>
            </div>
            <Preloader />
            <NewsCardList typeButton="add"
                hintText="Войдите, чтобы сохранять статьи"
                showTitle={true}
                showButton={true}
                cards={cards}
                keywoed={keyword}/>
            <About />
        </>
    )
}

export default Main;