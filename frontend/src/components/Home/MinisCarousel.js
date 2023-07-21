import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { fetchProductsByCategory, clearProducts } from '../../store/products';
import './home.css'


export default function MinisCarousel(){
    const category = 'Mini Size';
    const products = useSelector(state => Object.values(state.products))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearProducts())
        dispatch(fetchProductsByCategory('Mini Size'))
    }, [dispatch])

    return (
        <div className="new-prod-carousel-wrapper">
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
              items: 5,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 2,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 3,
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
            {products.map(product => (

                <div className="caro-product-slide">
                  
                   <div className="caro-product-card">
                        <NavLink to={`/products/${product.id}`} >
                              <img src={product.photoUrl} alt={product.name} className="caro-product-image" />
                        </NavLink>
                        <div className="caro-product-details">
                            <div className="brand-prod-carousel">{product.brand}</div>
                            <div className="name-prod-carousel">{product.name}</div>
                        </div>
                    </div>     
               
                </div>
            
            ))}
      </Carousel>
 
        
        </div>
    )
}