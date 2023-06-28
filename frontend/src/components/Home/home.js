import React from 'react'
import MainCarousel from './MainCarousel';
import './home.css'
import NewProductCarousel from './NewProductsCarousel';

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
      </div>

      
    </>
  );
} ; 

export default Home;