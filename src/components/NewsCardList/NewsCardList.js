import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ typeButton, hintText, showTitle, showButton, showHint, cards, keyword, isVisible, showMoreCards, saveCard }) {

    function addCardClick(cardId) {
        saveCard({
            title: cards[cardId].title,
            text: cards[cardId].text,
            date: cards[cardId].date,
            source: cards[cardId].source,
            link: cards[cardId].link,   
            image: cards[cardId].image
        }, keyword, localStorage.getItem('token'))
    }

    return (
        <section className={`card-list ${isVisible ? "card-list_visability" : "card-list_hidden"}`}>
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
                            addCardClick={addCardClick}
                        />
                    ))}
                </div>
                {showButton && <button type="button" className="card-list__button" onClick={showMoreCards}>Показать еще</button>}
            </div>
        </section>
    )
}

export default NewsCardList;