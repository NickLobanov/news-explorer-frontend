import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList() {
    return (
        <section className="card-list">
            <div className="card-list__wrap">
                <h2 className="card-list__title">Результаты поиска</h2>
                <NewsCard />
            </div>
        </section>
    )
}

export default NewsCardList;