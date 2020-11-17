import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import PopupWithMenu from '../PopupWithMenu/PopupWithMenu';
import {CurrentUserContext} from '../../contexts/currentUserContext';
import * as newsApi from '../../utils/NewsApi';
import * as mainApi from '../../utils/MainApi';


function App() {

  const [isLogged, setLogged] = React.useState(false);
  const [isPopupWithFormOpen, setPopupWithFormClick] = React.useState(false);
  const [isPopupWithMenuOpen, setPopupWithMenuClick] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [cardListVisible, setCardListVisible] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [signup, setSignup] = React.useState(true)

  React.useEffect(() => {
    //Проверка JWT токена
    function tokenCheck() {
      if(localStorage.getItem('token')) {
        const jwt = localStorage.getItem('token')
        mainApi.getUser(jwt)
        .then((res) => {
            console.log(`tokencheck: ${res}`)
            if(res) {
              setLogged(true)
            }
        })
      }
    }
    tokenCheck()
  }, [])

  React.useEffect(() => {
    mainApi.getUser(localStorage.getItem('token'))
      .then((userData) => {
        setCurrentUser(userData)
      })
      .catch(err => console.log(err))
  }, [setLogged])

  //Открытие popup авторизации / выход из профиля
  function handleAuthorizationBtn() {
    if (isLogged) {
      localStorage.removeItem('token')
      setLogged(false)
    } else {
      setPopupWithFormClick(true)
    }
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

  //Смена popup
  function switchPopup() {
    setSignup(!signup)
  }

  function handleLogin() {
    setLogged(true)
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
      <PopupWithForm isOpen={isPopupWithFormOpen} isClose={closeAllPopup} isSignup={signup} switchPopup={switchPopup} isLogged={handleLogin}/>
      <PopupWithMenu isLogged={isLogged} menuType={'mobile'} isOpen={isPopupWithMenuOpen} isClose={closeAllPopup}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
