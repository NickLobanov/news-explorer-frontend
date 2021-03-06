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
  const [isPreloaderActive, setPreloaderActive] = React.useState(false);
  const [formDisabvled, setFormDisabled] = React.useState(false);
  const [nowDay, setNowDay] = React.useState('');
  const [prevDay, setPrevDay] = React.useState('')

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
        setCards(JSON.parse(localStorage.getItem(('lastSearch'))))
        setCardListVisible(true)
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
      setCardListVisible(false)
      localStorage.removeItem('token')
      localStorage.removeItem('lastSearch')
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

  //Функция преобразования даты
  function dateHandle() {
    let nowDaySec = Date.now();
    let prevDaySec = nowDaySec - (24 * 7 * 60 * 60 * 1000);
    setNowDay(new Date(nowDaySec).toISOString().substr(0,10));
    setPrevDay(new Date(prevDaySec).toISOString().substr(0,10))
  }

  //Получение карточки
  function handleFormSubmit(evt, keyword) {
    evt.preventDefault();
    dateHandle()
    setPreloaderActive(true)
    newsApi.getNews(keyword, nowDay, prevDay)
      .finally(() => {
        setPreloaderActive(false)
      })
      .then((data) => {
          setCards(data.articles)
          localStorage.setItem('lastSearch', JSON.stringify(data.articles))
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
        const newCardArr = savedCard.filter((item) => item._id !== cardId);
        setSavedCard(newCardArr)
      })
      .catch(err => console.log(err))
  }

  //Авторизация пользователя
  function authHadnler(email, password) {
    setFormDisabled(true);
    mainApi.authorization(email, password)
      .finally(() => {
        setFormDisabled(false)
      })
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
    setFormDisabled(true);
    mainApi.register(email, password, name)
      .finally(() => {
        setFormDisabled(false)
      })
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
            isPreloader={isPreloaderActive}
            setPopupWithFormClick={setPopupWithFormClick}
          />
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
        formDisabled={formDisabvled}
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
