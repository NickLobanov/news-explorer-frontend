import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ typeButton, hintText, showTitle, showButton, showHint }) {
    return (
        <section className="card-list">
            <div className="card-list__container">
                {showTitle && <h2 className="card-list__title">Результаты поиска</h2>}
                <div className="card-list__wrap">
                    <NewsCard typeButton={typeButton} hintText={hintText} showHint={showHint}/>
                    <NewsCard typeButton={typeButton} hintText={hintText} showHint={showHint}/>
                    <NewsCard typeButton={typeButton} hintText={hintText} showHint={showHint}/>
                    <NewsCard typeButton={typeButton} hintText={hintText} showHint={showHint}/>
                </div>
                {showButton && <button type="button" className="card-list__button">Показать еще</button>}
            </div>
        </section>
    )
}

export default NewsCardList;