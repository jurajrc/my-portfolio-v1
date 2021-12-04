import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
// Components
import AboutMy from './pages/AboutMy';
import MyPortfolio from './pages/MyPortfolio';
import Contact from './pages/Contact';
import GlogalStyle from './components/GlobalStyle';
import Footer from './components/Footer';
// Animation
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()

  return (
    <div className="App">
      <GlogalStyle />
        <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname} >
          <Route path="/about" exact >
            <AboutMy />
          </Route>
          <Route path="/portfolio">
            <MyPortfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>

      <Footer />

    </div>
  );
}

export default App;
