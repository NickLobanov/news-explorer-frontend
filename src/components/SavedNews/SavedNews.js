import React from 'react';
import './SavedNews.css';
import Header from '../Header/Header';

function SavedNews({isLogged}) {
    return (
        <Header isLogged={isLogged}/>
    )
}

export default SavedNews;