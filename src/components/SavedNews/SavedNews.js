import React from 'react';
import './SavedNews.css';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SaveNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews({isLogged}) {
    return (
        <>
            <Header isLogged={isLogged}/>
            <SavedNewsHeader />
            <NewsCardList />
        </>
    )
}

export default SavedNews;