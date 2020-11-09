import React from 'react';
import './NewsCard.css';
import cardImage from '../../images/card-image.png';

function NewsCard({ typeButton, hintText, showHint}) {
    return (
        <div className="news-card">
            <img src={cardImage} alt="Изображение статьи" className="news-card__image"/>
            <div className="news-card__wrap">
                <p className="news-card__date">2 августа, 2019</p>
                <h3 className="news-card__title">«Первозданная тайга»: новый фотопроект</h3>
                <p className="news-card__text">В 2016 году Америка отмечала важный юбилей:
                    сто лет назад здесь начала складываться система национальных парков – охраняемых территорий,
                    где и сегодня каждый может приобщиться к природе.</p>
                <p className="news-card__source">Лента.ру</p>
            </div>
            <div className="news-card__container">
                {showHint && <span className="news-card__keyword">Природа</span>}
                <span className="news-card__hint">{hintText}</span>
                <div className={`news-card__button news-card__button_${typeButton}`}></div>
            </div>
        </div>
    )
}

export default NewsCard;