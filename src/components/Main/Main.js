import React from 'react';
import './Main.css'
import Header from '../Header/Header';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import { CurrentUserContext } from '../../contexts/currentUserContext';


function Main({ isLogged, authBtnClick, burgerMenuClick, isMobileMenuActive, cardList, isCardVisible, formSubmit, saveCard, isPreloader, setPopupWithFormClick }) {

    const currentUser = React.useContext(CurrentUserContext)

    const [keyword, setKeyword] = React.useState('');
    const [lastItem, setLastItem] = React.useState(3)

    function handleInput(evt) {
        setKeyword(evt.target.value)
    }
    
    function handleSubmit(evt) {
        formSubmit(evt, keyword)
    }

    const cardsArr = cardList.slice(0, lastItem);

    function increaseItem() {
        setLastItem(lastItem + 3)
    }

    return (
        <>
            <div className="main">
                <Header isLogged={isLogged}
                    authBtnClick={authBtnClick}
                    burgerMenuClick={burgerMenuClick}
                    isMobileMenuActive={isMobileMenuActive}
                    userName={currentUser.name}
                />
                <form className="main__form" onSubmit={handleSubmit}>
                    <h1 className="main__title">Что творится в мире?</h1>
                    <p className="main__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
                    <div className="main__wrap">
                        <input className="main__input" type="text" placeholder="Введите тему новости" onChange={handleInput}></input>
                        <button className="main__button">Искать</button>
                    </div>
                </form>
            </div>
            <Preloader isActive={isPreloader}/>
            <NewsCardList typeButton="add"
                hintText="Войдите, чтобы сохранять статьи"
                showTitle={true}
                showButton={true}
                cards={cardsArr}
                keyword={keyword}
                isVisible={isCardVisible}
                showMoreCards={increaseItem}
                saveCard={saveCard}
                isLogged={isLogged}
                setPopupWithFormClick={setPopupWithFormClick}
                />
            <About />
        </>
    )
}

export default Main;