import React, { useState, useEffect } from 'react';
import './home.css'

const ImageSlider =  () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleNextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % imageCount);
    };
    
    const handlePrevSlide = () => {
        setSlideIndex((prevIndex) =>
          prevIndex === 0 ? imageCount - 1 : prevIndex - 1
        );
    };
    
    const imageCount = 6;
  

    return  (
        <> 
        <div className="slider-content">
            <div id="left-arrow" onClick={handlePrevSlide}>
            <i class="fa-solid fa-chevron-left" style={{color: "#fafcff"}}></i>
            </div>
            <div className="slide" style={{
            transform: `translateX(-${slideIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out"}}>
                <div className="slide-img">
                    <img src='https://www.sephora.com/contentimages/homepage/053023/Homepage/app/2023-06-17-slotting-june-hybrid-minis-v2-site-rwd-home-page-hero-banner-4-product-us-ca-handoff_01-1280x1280.jpeg?imwidth=545' alt="img"></img>
                    <div className="image-link">
                        
                    </div>
                </div>

                <div className="slide-img">
                    <img src='https://www.sephora.com/contentimages/2023-june-spf-site-home-page-hero-banner-mineral-us1.jpg?    imwidth=545' alt="img"></img>
                    <div className="image-link">
                        
                    </div>
                </div>

                <div className="slide-img">
                    <img src='https://www.sephora.com/contentimages/2023-6-13-farmacy-green-clean-site-desktop-mobile-home-page-rwd-hero-banner-new-1200x800-en-us.jpg?imwidth=545' alt="img"></img>
                    <div className="image-link">
                       
                    </div>
                </div>

                <div className="slide-img">
                    <img src='https://www.sephora.com/contentimages/2023-june-spf-site-home-page-hero-banner-mineral-us1.jpg?   imwidth=545' alt="img"></img>
                    <div className="image-link">
                        
                    </div>
                </div>

                <div className="slide-img">
                    <img src='https://www.sephora.com/contentimages/2023-6-13-farmacy-green-clean-site-desktop-mobile-home-page-rwd-hero-banner-new-1200x800-en-us.jpg?imwidth=545' alt="img"></img>
                    <div className="image-link">
                        
                    </div>
                </div>

                <div className="slide-img">
                    <img src='https://www.sephora.com/contentimages/homepage/053023/Homepage/app/2023-06-17-slotting-june-hybrid-minis-v2-site-rwd-home-page-hero-banner-4-product-us-ca-handoff_01-1280x1280.jpeg?imwidth=545' alt="img"></img>
                    <div className="image-link">
                      

                    </div>
                </div>

            </div>

            <div id="right-arrow" onClick={handleNextSlide}>
            <i class="fa-solid fa-chevron-right" style={{color: "#fafcff"}}></i>

            </div>

        </div>


        </>

    )
}

  
export default ImageSlider;