import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import PopupWithMenu from '../PopupWithMenu/PopupWithMenu';
import {CurrentUserContext} from '../../contexts/currentUserContext';
import * as newsApi from '../../utils/NewsApi';


function App() {

  const [isLogged, setLogged] = React.useState(false);
  const [isPopupWithFormOpen, setPopupWithFormClick] = React.useState(false);
  const [isPopupWithMenuOpen, setPopupWithMenuClick] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [cardListVisible, setCardListVisible] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {

  })

  //Открытие popup авторизации
  function handleAuthorizationBtn() {
    setPopupWithFormClick(true)
  }

  function handleMenuBtn() {
    setPopupWithMenuClick(true)
  }

  //Закрытие popup
  function closeAllPopup() {
    setPopupWithFormClick(false)
    setPopupWithMenuClick(false)
  }

  //form handle
  function handleFormSubmit(evt, keyword) {
    evt.preventDefault();
    newsApi.getNews(keyword)
        .then((data) => {
            setCards(data.articles)
            setCardListVisible(true);
        })
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Main isLogged={isLogged}
            authBtnClick={handleAuthorizationBtn}
            burgerMenuClick={handleMenuBtn}
            isMobileMenuActive={isPopupWithMenuOpen}
            cardList={cards}
            isCardVisible={cardListVisible}
            formSubmit={handleFormSubmit}/>
        </Route>
        <Route path="/saved-news">
          <SavedNews isLogged={isLogged} cardList={cards}/>
        </Route>
      </Switch>
      <Footer />
      <PopupWithForm isOpen={isPopupWithFormOpen} isClose={closeAllPopup}/>
      <PopupWithMenu isLogged={isLogged} menuType={'mobile'} isOpen={isPopupWithMenuOpen} isClose={closeAllPopup}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
