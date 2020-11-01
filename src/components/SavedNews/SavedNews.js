import React from 'react';
import './SavedNews.css';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SaveNewsHeader';

function SavedNews({isLogged}) {
    return (
        <>
            <Header isLogged={isLogged}/>
            <SavedNewsHeader />
        </>
    )
}

export default SavedNews;