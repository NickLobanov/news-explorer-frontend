import React from 'react';
import './App.css';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import NewsCardList from '../NewsCardList/NewsCardList';

function App() {

  const [isLogged, setLogged] = React.useState(true);

  return (
    <div className="page">
      <Main isLogged={isLogged}/>
      <NewsCardList />
      <About />
      <Footer />
    </div>
  );
}

export default App;
