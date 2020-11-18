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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import PopupSuccess from '../PopupSuccess/PopupSuccess';


function App() {

  const [isLogged, setLogged] = React.useState(false);
  const [isPopupWithFormOpen, setPopupWithFormClick] = React.useState(false);
  const [isPopupWithMenuOpen, setPopupWithMenuClick] = React.useState(false);
  const [isPopupSuccessOpen, setPopupSuccessOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [savedCard, setSavedCard] = React.useState([]);
  const [cardListVisible, setCardListVisible] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [signup, setSignup] = React.useState(true);
  const [isPreloaderActive, setPreloaderActive] = React.useState(false)

  React.useEffect(() => {
    //Проверка JWT токена
    function tokenCheck() {
      if(localStorage.getItem('token')) {
        const jwt = localStorage.getItem('token')
        Promise.all([mainApi.getUser(jwt), mainApi.getCards(jwt)])
          .then(([userData, saveCardData]) => {
            if (userData) {
              setLogged(true);
              setSavedCard(saveCardData)
            }
          })
      }
    }
    tokenCheck()
  }, [])

  React.useEffect(() => {
    const jwt = localStorage.getItem('token')
    Promise.all([mainApi.getUser(jwt), mainApi.getCards(jwt)])
      .then(([userData, saveCardData]) => {
        setCurrentUser(userData)
        setSavedCard(saveCardData)
      })
      .catch(err => console.log(err))
  }, [isLogged])

  //Открытие popup авторизации / выход из профиля
  function handleAuthorizationBtn() {
    if (isLogged) {
      localStorage.removeItem('token')
      setLogged(false)
      setPopupWithMenuClick(false)
    } else {
      setPopupWithFormClick(true)
      setPopupWithMenuClick(false)
    }
  }

  function handleMenuBtn() {
    setPopupWithMenuClick(true)
  }

  function handleAuthPopupOpen() {
    setPopupSuccessOpen(false)
    setPopupWithFormClick(true)
  }

  //Закрытие popup
  function closeAllPopup() {
    setPopupWithFormClick(false)
    setPopupWithMenuClick(false)
    setPopupSuccessOpen(false)
  }

  //Получение карточки
  function handleFormSubmit(evt, keyword) {
    evt.preventDefault();
    setPreloaderActive(true)
    newsApi.getNews(keyword)
      .finally(() => {
        setPreloaderActive(false)
      })
      .then((data) => {
          setCards(data.articles)
          setCardListVisible(true);
      })
      .catch(err => console.log(err))
  }

  //Смена popup
  function switchPopup() {
    setSignup(!signup)
  }

  function handleLogin() {
    setLogged(true)
  }

  //Сохранение карточки
  function saveCard(cardData, keyword, token) {
      mainApi.post(cardData, keyword, token)
        .then((newCard) => {
          setSavedCard([...savedCard, newCard])
        })
        .catch(err => console.log(err))
  }

  //Удаление карточки
  function deleteCard(cardId, token) {
    mainApi.deleteCard(token, cardId)
      .then(() => {
        const newCardArr = savedCard.map((item) => {
          return item._id !== item.cardId
        });
        setSavedCard(newCardArr)
      })
      .catch(err => console.log(err))
  }

  //Авторизация пользователя
  function authHadnler(email, password) {
    mainApi.authorization(email, password)
      .then(data => {
        if (data) {
          console.log('success');
          setLogged(true)
          closeAllPopup()
        }
      })
  }

  //Регистрация пользователя
  function regHandler(email, password, name) {
    mainApi.register(email, password, name)
      .then(data => {
        if (data) {
          console.log('success');
          closeAllPopup();
          setPopupSuccessOpen(true)
        }
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
            formSubmit={handleFormSubmit}
            saveCard={saveCard}
            isPreloader={isPreloaderActive}/>
        </Route>
        <ProtectedRoute path="/saved-news"
          isLogged={isLogged}
          component={SavedNews}
          deleteCard={deleteCard}
          savedCards={savedCard}
          singOut={handleAuthorizationBtn}
          isMobileMenuActive={isPopupWithMenuOpen}
          burgerMenuClick={handleMenuBtn}
        />
      </Switch>
      <Footer />
      <PopupWithForm isOpen={isPopupWithFormOpen}
        isClose={closeAllPopup}
        isSignup={signup}
        switchPopup={switchPopup}
        isLogged={handleLogin}
        authHandler={authHadnler}
        regHandler={regHandler}
      />
      <PopupWithMenu isLogged={isLogged}
        menuType={'mobile'}
        isOpen={isPopupWithMenuOpen}
        isClose={closeAllPopup}
        signOut={handleAuthorizationBtn}/>
      <PopupSuccess isOpen={isPopupSuccessOpen} isClose={closeAllPopup} openAuthPopup={handleAuthPopupOpen}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
