import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { fetchProductsByCategory, clearProducts } from '../../store/products';

export default function NewProductCarousel(){
    const category = 'New';
    const products = useSelector(state => Object.values(state.products))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductsByCategory(category))
    }, [dispatch, category])

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
        partialVisbile
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

                <div className="new-product-slide">
                   <div className="new-product-card">
                        <img src={product.photoUrl} alt={product.name} className="new-product-image" />
                        <div className="new-product-details">
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