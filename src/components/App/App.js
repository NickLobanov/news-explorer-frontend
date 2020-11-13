import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import PopupWithMenu from '../PopupWithMenu/PopupWithMenu';


function App() {

  const [isLogged, setLogged] = React.useState(true);
  const [isPopupWithFormOpen, setPopupWithFormClick] = React.useState(false);
  const [isPopupWithMenuOpen, setPopupWithMenuClick] = React.useState(false);

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

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main isLogged={isLogged}
            authBtnClick={handleAuthorizationBtn}
            burgerMenuClick={handleMenuBtn}
            isMobileMenuActive={isPopupWithMenuOpen}/>
        </Route>
        <Route path="/saved-news">
          <SavedNews isLogged={isLogged}/>
        </Route>
      </Switch>
      <Footer />
      <PopupWithForm isOpen={isPopupWithFormOpen} isClose={closeAllPopup}/>
      <PopupWithMenu isLogged={isLogged} menuType={'mobile'} isOpen={isPopupWithMenuOpen} isClose={closeAllPopup}/>
    </div>
  );
}

export default App;
