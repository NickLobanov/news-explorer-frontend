import React from 'react';
import './SavedNewsHeader.css';

function SavedNewsHeader({ userName }) {
    return(
        <section className="news-info">
            <div className="news-info__container">   
                <h3 className="news-info__title">Сохранённые статьи</h3>
                <p className="news-info__amount">{userName}, у вас 5 сохранённых статей</p>
                <p className="news-info__keywords">По ключевым словам: <span className="news-info__keyword">Природа</span>,
                    <span className="news-info__keyword">Тайга</span> и <span className="news-info__keyword">2-м другим</span>
                </p>   
            </div>
        </section>
    )
}

export default SavedNewsHeader;