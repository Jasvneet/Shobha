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
        <div className='divider-home'></div>
        <div className='featured-categories-container'>
          <ul className='featured-categories'>

              <li className='category'>
                <a href="#" className='category-details'>
                  <h5>Perfume</h5>
                  <div className='category-img-container'>
                    <img src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_fragrance_bottle_us_ca_rwd_slice.jpg?imwidth=48" srcset="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_fragrance_bottle_us_ca_rwd_slice.jpg?imwidth=48 1x, https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_fragrance_bottle_us_ca_rwd_slice.jpg?imwidth=96 2x" loading="lazy" role="presentation" alt="" class="css-z3vs2m eanm77i0" data-comp="Image StyledComponent BaseComponent "/>
                  </div>
                </a>
              </li>

          </ul>
        </div>

      </div>

      
    </>
  );
} ; 

export default Home;