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
              <div className='featured-heading-container'>
                <h2>Featured Categories</h2>
                <div className='featured-subheading'>
                  Shop what's popular now.
                </div>

              </div>
              <li className='category'>
                <a href="#" className='category-details'>
                  <h5>Foundation</h5>
                  <div className='category-img-container'>
                  <img src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_samples_32_us_ca_rwd_slice.png?imwidth=48"  />
                  </div>
                </a>
              </li>

              <li className='category'>
                <a href="#" className='category-details'>
                  <h5>Moisturizers</h5>
                  <div className='category-img-container'>
                  <img src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_skincare_cleanser_moisturizer_us_ca_rwd_slice.jpg?imwidth=48" />
                  </div>
                </a>
              </li>
              
              <li className='category'>
                <a href="#" className='category-details'>
                  <h5>Hair Styling & Treatments</h5>
                  <div className='category-img-container'>
                  <img src="https://www.sephora.com/contentimages/homepage/091322/Homepage/RWD/hair%20dryer.JPG?imwidth=48" />
                  </div>
                </a>
              </li>

              <li className='category'>
                <a href="#" className='category-details'>
                  <h5>Perfume</h5>
                  <div className='category-img-container'>
                    <img src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_fragrance_bottle_us_ca_rwd_slice.jpg?imwidth=48" />
                  </div>
                </a>
              </li>
              <li className='category'>
                <a href="#" className='category-details'>
                  <h5>Minis</h5>
                  <div className='category-img-container'>
                  <img src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_minis_us_ca_rwd_slice.png?imwidth=48" />
                  </div>
                </a>
              </li>

              <li className='category'>
                <a href="#" className='category-details'>
                  <h5>Gifts</h5>
                  <div className='category-img-container'>
                    <img src="https://www.sephora.com/contentimages/homepage/092022/Homepage/RWD/gifts%2032@3x.png?imwidth=48" />
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