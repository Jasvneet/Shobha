import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/products';
import ReviewIndex from '../Reviews/ReviewIndex';
import './Product.css'


const ProductShow = () => {
    const {productId} = useParams();
    const product = useSelector(state => state.products[productId]);
    const dispatch = useDispatch();
    const [showIngredients, setShowIngredients] = useState(false);
    const [showHow, setShowHow] = useState(false);
    const currentUser = useSelector(state => state.session.user)

    useEffect(() => {
        if (productId){

            dispatch(fetchProduct(productId))
        }
    }, [productId]);

    if (product === undefined) {
        return null 
    }

    const toggleIngredients = () => {
        setShowIngredients(!showIngredients);
    };

    const toggleHow = () => {
        setShowHow(!showHow)
    }
   
    return (
        <>
        <div className='show-page'>
           <div className='prod-sec1'>
                <div className="image-container">
                    <img src={product.photoUrl} />
                </div>
                <div className='name-price-size'>
                    <NavLink to={`/brands/${product.brand}`} className='brand'>
                                    {product.brand}
                    </NavLink>
                    <div>
                        <p className='name'>{product.name}</p>
                    </div>
                    <b className='price'><strong>${product.price}0</strong> get 25% off your Shobha order when you open and use a Shobha Credit Card today. </b>
                    <p className='size'>Size: {product.size} oz</p>
                </div>
           </div>
           <div className='divider'/>

           <div className='section'>
                <div>
                    <h2>Highlights</h2>
                </div>

                <div>
                    <ul>

                    </ul>
                </div>
            </div>   

            <div className='divider'/>

            <div className='section'>
                <div className='about-heading'>
                    <h2>About the Product</h2>
                </div>
                <div className='what'>
                    <p>{product.description}</p>
                </div>
            </div>

            <div className='divider'/>

            <div className="section-drop">
    
                    <button onClick={toggleIngredients} className='section-button'>
                        <h2>Ingredients</h2>
                        <div>
                            {showIngredients ? '-' : '+'}
                        </div>
                    </button>

                {showIngredients && (
                    <p>{product.ingredients}</p>
                )}
            </div>

            <div className='divider'/>

            <div className='section-drop'>

            <button onClick={toggleHow} className='section-button'>
                        <h2>How to Use</h2>
                        <div>
                            {showHow ? '-' : '+'}
                        </div>
                    </button>

                {showHow && (
                    <p>Suggested Usage:</p>
                )}
            </div>

            <div className='divider'/>

            <div className='similar-products'>
             <h2>You may Also Like </h2>
            </div>

            <div className='divider'/>
            
            <div className='reviews-show'>
                <div className='reviews-header'>
                    <h2>Ratings & Reviews</h2>
                    <NavLink to={`/reviews/new/${productId}`} className="write-review-link">Write a Review</NavLink>
                  
                </div>

                    <ReviewIndex currentUser={currentUser} />
            </div>

        </div>
           
        </>
    )
}

export default ProductShow;