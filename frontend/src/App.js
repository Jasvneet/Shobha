import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';
import SearchResults from './components/SearchBar/SearchResults';
import Navigation from "./components/Navigation";
import ProductShow from './components/Product/ProductShow';
import ProductIndex from './components/Product/ProductIndex';

function App() {
  return (
    <>
      <Navigation />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:productId" component={ProductShow} />
          <Route exact path="/products" component={ProductIndex} />
          <Route exact path="/search" component={SearchResults} />

          
          </Switch>
    </>
  );
}

export default App;
