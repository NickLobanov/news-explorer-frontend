import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ typeButton, hintText, showTitle, showButton, showHint, cards, keyword }) {

    return (
        <section className="card-list">
            <div className="card-list__container">
                {showTitle && <h2 className="card-list__title">Результаты поиска</h2>}
                <div className="card-list__wrap">
                    {cards.map((data, index) => (
                        <NewsCard typeButton={typeButton}
                            id={index}
                            key={index}
                            hintText={hintText}
                            showHint={showHint}
                            sourceName={data.source.name}
                            description={data.description}
                            title={data.title}
                            cardImage={data.urlToImage}
                            keyword={keyword}
                        />
                    ))}
                </div>
                {showButton && <button type="button" className="card-list__button">Показать еще</button>}
            </div>
        </section>
    )
}

export default NewsCardList;