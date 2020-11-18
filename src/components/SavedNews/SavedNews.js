import React from 'react';
import './SavedNews.css';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SaveNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import { CurrentUserContext } from '../../contexts/currentUserContext';


function SavedNews({ isLogged }) {

    const currentUser = React.useContext(CurrentUserContext);
    // const [savedCards, saveNewCard] = React.useState([]);

    // React.useEffect(() => {
    //     mainApi.getCards(localStorage.getItem('token'))
    //         .then((data) => {
    //             saveNewCard(data)
    //         })
    //         .catch(err => console.log(err))
    // }, [])

    return (
        <>
            <Header isLogged={isLogged} darkType="dark" userName={currentUser.name}/>
            <SavedNewsHeader userName={currentUser.name}/>
            <NewsCardList typeButton="delete"
                hintText="Убрать из сохранённых"
                showTitle={false}
                showButton={false}
                showHint={true}
                isVisible={true}
                />
        </>
    )
}

export default SavedNews;