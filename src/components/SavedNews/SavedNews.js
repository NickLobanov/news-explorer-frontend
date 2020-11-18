import React from 'react';
import './SavedNews.css';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SaveNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import { CurrentUserContext } from '../../contexts/currentUserContext';
import * as mainApi from '../../utils/MainApi';


function SavedNews({ isLogged, deleteCard, savedCards }) {

    const currentUser = React.useContext(CurrentUserContext);
    const [savedUserCards, setUserCards] = React.useState([]);

    React.useEffect(() => { 
        setUserCards(savedCards.filter(item => item.owner === currentUser._id))    
    }, [])

    return (
        <>
            <Header isLogged={isLogged} darkType="dark" userName={currentUser.name}/>
            <SavedNewsHeader userName={currentUser.name} amoutArticles={savedUserCards}/>
            <NewsCardList typeButton="delete"
                hintText="Убрать из сохранённых"
                showTitle={false}
                showButton={false}
                showHint={true}
                isVisible={true}
                cards={savedUserCards}
                deleteCard={deleteCard}
                />
        </>
    )
}

export default SavedNews;