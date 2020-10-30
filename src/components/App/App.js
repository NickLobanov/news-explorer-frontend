import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';


function App() {

  const [isLogged, setLogged] = React.useState(true);

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main isLogged={isLogged}/>
        </Route>
        <Route path="saved-news">
          <SavedNews />
        </Route>
      </Switch>
      
      <Footer />
    </div>
  );
}

export default App;
