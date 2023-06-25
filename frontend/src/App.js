import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';
import SearchResults from './components/SearchBar/SearchResults';
import Navigation from "./components/Navigation";
import NavBar2 from './components/Navbar2';
import ProductShow from './components/Products/ProductShow';
import ProductIndex from './components/Products/ProductIndex';
import BrandShow from './components/Brands/BrandShow';
import BrandsIndex from './components/Brands/BrandsIndex';
import CreateReview from './components/Reviews/CreateReviewFormPage';

function App() {
  return (
    <>
      <Navigation />
      <NavBar2 />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:productId" component={ProductShow} />
          <Route exact path="/products" component={ProductIndex} />
          <Route exact path="/search" component={SearchResults} />
          <Route exact path="/brands/:brand" component={BrandShow} />
          <Route exact path="/brands" component={BrandsIndex} />
          <Route exact path="/reviews/new/:productId" component={CreateReview} />
          
          </Switch>
    </>
  );
}

export default App;
