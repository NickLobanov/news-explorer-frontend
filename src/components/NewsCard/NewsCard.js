import React from 'react';
import './NewsCard.css';

function NewsCard({ typeButton, hintText, showHint, sourceName, description, title, cardImage, keyword, id, addCardClick, cardKey, deleteCard}) {

    function clickBookmark(evt) {
        if (evt.target.classList.contains('news-card__button_add')) {
            console.log(id)
            addCardClick(id)
        }
        if (evt.target.classList.contains('news-card__button_delete')) {
            deleteCard(cardKey, localStorage.getItem('token'))
            console.log(cardKey)
        }
    }

    return (
        <div className="news-card" onClick={clickBookmark}>
            <img src={cardImage} alt="Изображение статьи" className="news-card__image"/>
            <div className="news-card__wrap">
                <p className="news-card__date">2 августа, 2019</p>
                <h3 className="news-card__title">{title}</h3>
                <p className="news-card__text">{description}</p>
                <p className="news-card__source">{sourceName}</p>
            </div>
            <div className="news-card__container">
                {showHint && <span className="news-card__keyword">{keyword}</span>}
                <span className="news-card__hint">{hintText}</span>
                <div className={`news-card__button news-card__button_${typeButton}`}></div>
            </div>
        </div>
    )
}

export default NewsCard;