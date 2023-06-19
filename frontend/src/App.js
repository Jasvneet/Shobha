import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainCarousel from './components/Carousel1/carousel1';

import Navigation from "./components/Navigation";
import ProductShow from './components/Product/ProductShow';

function App() {
  return (
    <>
      <Navigation />
          <Switch>
          <Route exact path="/" component={MainCarousel} />
            <Route exact path="/products/:productId" component={ProductShow} />

          
          </Switch>
    </>
  );
}

export default App;
