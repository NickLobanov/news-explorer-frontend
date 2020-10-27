import React from 'react';

function Main() {
    return (
        <div className="main">
            <h1 className="main__title">Что творится в мире?</h1>
            <p className="main__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
            <form className="main__form">
                <input className="main__input" type="text" placeholder="Введите тему новости"></input>
                <button className="main__button">Искать</button>
            </form>
        </div>
    )
}

export default Main;