import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink, Link } from 'react-router-dom';
import './home.css'


export default function MainCarousel(){
    
 return (
    
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        partialVisible={true}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 3,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 30
            }
          }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        >
           
        <div className="slide-img">
            <img src='https://www.sephora.com/contentimages/2023-6-9-isle-of-paradise-body-collection-site-desktop-mobile-home-page-rwd-hero-banner-new-1200x800-en-us-can.jpg?imwidth=545' alt="img"></img>
            <div className="slide-isle-link">
            <div className="slide-link-container">
              <h3>New Isle of Paradise Body Care</h3>
              <NavLink to={'/brands/Isle of Paradise'} className='slide-link'>
                  <p>Cleanse, exfoliate, and moisturize with skincare-powered formulas.</p>
                  <span>SHOP NOW </span>
              </NavLink>
            </div>
            </div>
        </div>

        <div className="slide-img">
            <img src='https://www.sephora.com/contentimages/2023-06-27-slotting-just-arrived-v4-standard-site-responsive-home-page-hero-banner-US-handoff_01.jpg?imwidth=545' alt="img"></img>
            <div className="slide-newprod-link">
              <div className="slide-link-container">
                  <h3>The Latest Lineup</h3>
                  <NavLink to={'/categories/New'} className='slide-link'>
                      <p>New beauty from the hottest brands</p>
                      <span>SHOP NOW </span>
                  </NavLink>
              </div>
            </div>
        </div>


        <div className="slide-img">
            <img src='https://www.sephora.com/contentimages/homepage/053023/Homepage/app/2023-06-17-slotting-june-hybrid-minis-v2-site-rwd-home-page-hero-banner-4-product-us-ca-handoff_01-1280x1280.jpeg?imwidth=545' alt="img"></img>
            <div className="slide-minis-link">
              <div className="slide-link-container">
                  <h3>Must-Have-Minis</h3>
                  <NavLink to={'/categories/Mini Size'} className='slide-link'>
                      <p>Cant't-miss beauty at great values</p>
                      <span>SHOP NOW </span>
                  </NavLink>
              </div>

            </div>
        </div>

        <div className="slide-img">
            <img src='https://www.sephora.com/contentimages/2023-6-13-farmacy-green-clean-site-desktop-mobile-home-page-rwd-hero-banner-new-1200x800-en-us.jpg?imwidth=545' alt="img"></img>
            <div className="slide-farmacy-link">
              <div className="slide-link-container">
                  <h3>Limited-Edition Farmacy</h3>
                  <NavLink to={'/brands/Farmacy'} className='slide-link'>
                      <p>Discover new scents. Available exclusively at Shobha. </p>
                      <span>SHOP NOW </span>
                  </NavLink>
                </div>
            </div>
        </div>
        <div className="slide-img">
            <img src='https://www.sephora.com/contentimages/2023-6-22-charlotte-tilbury-lip-blur-site-desktop-mweb-home-page-rwd-hero-banner-new-1200x800-en-us-can.jpg?imwidth=545' alt="img"></img>
            <div className="slide-lips-link">
              <div className="slide-link-container">
                <h3>NEW Charlotte Tilbury</h3>
                <NavLink to={'/brands/Charlotte Tilbury'} className='slide-link'>
                    <p>Blur lips with this lightweight, full-coverage, matte liquid lipstick. Uniquely at Sephora.</p>
                    <span>SHOP NOW </span>
                </NavLink>
             </div>     
            </div>
        </div>
        <div className="slide-img">
            <img src='https://www.sephora.com/contentimages/2023-june-spf-site-home-page-hero-banner-mineral-us1.jpg?   imwidth=545' alt="img"></img>
            <div className="slide-sunscreen-link">
              <div className="slide-link-container">
                  <h3>Ultra-Hydrating SPF</h3>
                  <NavLink to={'/categories/Sunscreen'} className='slide-link'>
                      <p>The ultimate skincare must-have</p>
                      <span>SHOP NOW </span>
                  </NavLink>
              </div>
            </div>
        </div>

      </Carousel>
 )
}
