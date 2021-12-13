import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
// Components
import AboutMy from './pages/AboutMy';
import MyPortfolio from './pages/MyPortfolio';
import Contact from './pages/Contact';
import GlogalStyle from './components/GlobalStyle';
import Footer from './components/Footer';
import ScrollTopButton from './components/ScrollTopButton';
// Animation
import { AnimatePresence } from 'framer-motion'

function App() {
  const [showButtonTop, setShowButtonTop] = useState(false)
  const [messageConsole, setMessageConsole] = useState(true)
  const location = useLocation()

  // message to console
  useEffect(() => {
    messageConsole && console.log("%cAhoj vitaj v console môjho web-portfólia, kontakt na mňa => https://jurajportfolio.6f.sk/#/contact a môžme začať spolupracovať :)", "color:#0080ff; border: 1px solid #0080ff;");
    setMessageConsole(false)
  }, [messageConsole])

  // show/hidden to button scroll to top
  useScrollPosition(({ currPos }) => {
    if(-currPos.y > 300) {
      setShowButtonTop(true)
    } else {
      setShowButtonTop(false)
    }
  })

  return (
    <div className="App">
      <GlogalStyle />
        <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname} >
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
      </AnimatePresence>

      <AnimatePresence>
        { showButtonTop && (
          <ScrollTopButton />
        )}
      </AnimatePresence>
      <Footer />

    </div>
  );
}

export default App;
