import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ typeButton, hintText, showTitle, showButton, showHint, cards, keyword, isVisible, showMoreCards, saveCard, deleteCard, isLogged, setPopupWithFormClick }) {

    function addCardClick(cardId) {
        console.log(cards[cardId])
        saveCard({
            title: cards[cardId].title,
            text: cards[cardId].description,
            date: cards[cardId].publishedAt,
            source: cards[cardId].source.name,
            link: cards[cardId].url,   
            image: cards[cardId].urlToImage
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
                            key={data._id}
                            date={Date.parse(data.publishedAt.slice(0, 10))}
                            cardKey={data._id}
                            hintText={hintText}
                            showHint={showHint}
                            sourceName={data.source.name || data.source}
                            description={data.description || data.text}
                            title={data.title}
                            cardImage={data.urlToImage || data.image}
                            keyword={data.keyword}
                            addCardClick={addCardClick}
                            deleteCard={deleteCard}
                            isLogged={isLogged}
                            setPopupWithFormClick={setPopupWithFormClick}
                        />
                    ))}
                </div>
                {showButton && <button type="button" className="card-list__button" onClick={showMoreCards}>Показать еще</button>}
            </div>
        </section>
    )
}

export default NewsCardList;