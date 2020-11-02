import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ typeButton, hintText }) {
    return (
        <section className="card-list">
            <h2 className="card-list__title">Результаты поиска</h2>
            <div className="card-list__wrap">
                <NewsCard typeButton={typeButton} hintText={hintText}/>
                <NewsCard typeButton={typeButton} hintText={hintText}/>
                <NewsCard typeButton={typeButton} hintText={hintText}/>
                <NewsCard typeButton={typeButton} hintText={hintText}/>
            </div>
            <button type="button" className="card-list__button">Показать еще</button>
        </section>
    )
}

export default NewsCardList;