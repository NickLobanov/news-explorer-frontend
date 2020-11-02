import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import PopupWithForm from '../PopupWithForm/PopupWithForm';


function App() {

  const [isLogged, setLogged] = React.useState(true);

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main isLogged={isLogged}/>
        </Route>
        <Route path="/saved-news">
          <SavedNews isLogged={isLogged}/>
        </Route>
      </Switch>
      <Footer />
      <PopupWithForm />
    </div>
  );
}

export default App;
