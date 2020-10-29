import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList() {
    return (
        <section className="card-list">
            <h2 className="card-list__title">Результаты поиска</h2>
            <div className="card-list__wrap">
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
            <button type="button" className="card-list__button">Показать еще</button>
        </section>
    )
}

export default NewsCardList;