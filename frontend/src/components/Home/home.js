import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { fetchProductsByCategory, clearProducts } from '../../store/products';
import MainCarousel from './MainCarousel';
import './home.css'
import NewProductCarousel from './NewProductsCarousel';
import MinisCarousel from './MinisCarousel';

const Home = () => {

  
  return (
    <>
      <div className='home-wrapper'>
        <div className='main-caro'>
          <MainCarousel />
        </div>
        <div className='new-prod-caro'>
          <h2>Just Dropped!</h2>
          <NewProductCarousel />
        </div>
        <div className='new-prod-caro'>
          <h2>Adventure-ready beauty, perfectly portable!  ✈️💄</h2>
          <MinisCarousel />
         
        </div>
      </div>

      
    </>
  );
} ; 

export default Home;