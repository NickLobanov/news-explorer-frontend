import React from 'react';
import './SavedNews.css';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SaveNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import { CurrentUserContext } from '../../contexts/currentUserContext';;


function SavedNews({ isLogged, deleteCard, savedCards, singOut, isMobileMenuActive, burgerMenuClick }) {

    const currentUser = React.useContext(CurrentUserContext);
    const [savedUserCards, setUserCards] = React.useState([]);
    console.log(savedCards)

    React.useEffect(() => { 
        setUserCards(savedCards.filter(item => item.owner === currentUser._id))    
    }, [savedCards])

    return (
        <>
            <Header isLogged={isLogged}
                darkType="dark"
                userName={currentUser.name}
                authBtnClick={singOut}
                isMobileMenuActive={isMobileMenuActive}
                burgerMenuClick={burgerMenuClick}
            />
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