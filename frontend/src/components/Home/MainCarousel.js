import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


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
            <img src='https://www.sephora.com/contentimages/2023-june-clean-makeup-site-desktop-home-page-rwd-hero-banner-trending-complexion-1200x800-can.jpg?imwidth=545' alt="img"></img>
            <div className="slide-img-link">
                        
            </div>
        </div>
        <div className="slide-img">
            <img src='https://www.sephora.com/contentimages/2023-06-26-slotting-foundation-concealer-site-rwd-home-page-hero-banner-4-product-US-CA_01.jpg?imwidth=545' alt="img"></img>
            <div className="slide-img-link">
                
            </div>
        </div>

        <div className="slide-img">
            <img src='https://www.sephora.com/contentimages/2023-06-11-slotting-just-arrived-v2-standard-site-rwd-home-page-hero-banner-4-product-english-US-CA-handoff_01.jpg?imwidth=545' alt="img"></img>
            <div className="slide-img-link">
                
            </div>
        </div>

        <div className="slide-img">
            <img src='https://www.sephora.com/contentimages/2023-june-spf-site-home-page-hero-banner-mineral-us1.jpg?   imwidth=545' alt="img"></img>
            <div className="slide-img-link">
                
            </div>
        </div>

        <div className="slide-img">
            <img src='https://www.sephora.com/contentimages/2023-6-13-farmacy-green-clean-site-desktop-mobile-home-page-rwd-hero-banner-new-1200x800-en-us.jpg?imwidth=545' alt="img"></img>
            <div className="slide-img-link">
                
            </div>
        </div>

        <div className="slide-img">
            <img src='https://www.sephora.com/contentimages/homepage/053023/Homepage/app/2023-06-17-slotting-june-hybrid-minis-v2-site-rwd-home-page-hero-banner-4-product-us-ca-handoff_01-1280x1280.jpeg?imwidth=545' alt="img"></img>
            <div className="slide-img-link">
                

            </div>
        </div>
      </Carousel>
 )
}
