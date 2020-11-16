import React from 'react';
import './SavedNews.css';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SaveNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews({isLogged, cardList}) {
    return (
        <>
            <Header isLogged={isLogged} darkType="dark"/>
            <SavedNewsHeader />
            <NewsCardList typeButton="delete"
                hintText="Убрать из сохранённых"
                showTitle={false}
                showButton={false}
                showHint={true}
                cards={cardList}
                isVisible={true}
                />
        </>
    )
}

export default SavedNews;