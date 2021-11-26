import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
// Components
import AboutMy from './pages/AboutMy';
import MyPortfolio from './pages/MyPortfolio';
import Contact from './pages/Contact';
import GlogalStyle from './components/GlobalStyle';

function App() {
  const location = useLocation()

  return (
    <div className="App">
      <GlogalStyle />
      <Header />
      
      <Switch>
        <Route path="/" exact >
          <AboutMy />
        </Route>
        <Route path="/portfolio">
          <MyPortfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
