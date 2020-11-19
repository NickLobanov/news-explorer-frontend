import React from 'react';
import './SavedNewsHeader.css';

function SavedNewsHeader({ userName, amoutArticles }) {
    console.log(amoutArticles)

    const keywordArr = amoutArticles.map((item) => {
        return item.keyword
    })

    let uniqeKeyword = [];
    function unique(arr) {
        arr.forEach(item => {
            if (!uniqeKeyword.includes(item)) {
                uniqeKeyword.push(item)
            }
        })
    }
    unique(keywordArr);


    return(
        <section className="news-info">
            <div className="news-info__container">   
                <h3 className="news-info__title">Сохранённые статьи</h3>
                <p className="news-info__amount">{userName}, у вас {amoutArticles.length} сохранённых статей</p>
                {uniqeKeyword.length > 3 ?
                 <p className="news-info__keywords">По ключевым словам: <span className="news-info__keyword">{uniqeKeyword[0]}</span>,
                    <span className="news-info__keyword">{uniqeKeyword[1]}</span> и <span className="news-info__keyword">{uniqeKeyword.length - 2} другим</span>
                </p> : 
                <p className="news-info__keywords">По ключевым словам: <span className="news-info__keyword">{uniqeKeyword[0]}</span>
                    {uniqeKeyword[1] && <span className="news-info__keyword">,{uniqeKeyword[1]}</span>}
                    {uniqeKeyword[2] && <span className="news-info__keyword">,{uniqeKeyword[2]}</span>} 
                </p> }
                  
            </div>
        </section>
    )
}

export default SavedNewsHeader;