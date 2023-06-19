import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainCarousel from './components/Carousel1/carousel1';

import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
        <MainCarousel />
          <Switch>
          
          </Switch>
    </>
  );
}

export default App;
