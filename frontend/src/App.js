import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';
import SearchResults from './components/SearchBar/SearchResults';
import Navigation from "./components/Navigation";
import ProductShow from './components/Products/ProductShow';
import ProductIndex from './components/Products/ProductIndex';
import BrandShow from './components/Brands/BrandShow';

function App() {
  return (
    <>
      <Navigation />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:productId" component={ProductShow} />
          <Route exact path="/products" component={ProductIndex} />
          <Route exact path="/search" component={SearchResults} />
          <Route exact path="/:brand" component={BrandShow} />
          
          </Switch>
    </>
  );
}

export default App;
