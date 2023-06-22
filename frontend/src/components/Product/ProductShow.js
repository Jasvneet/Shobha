import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/products';
import './Product.css'

const ProductShow = () => {
    const {productId} = useParams();
    const product = useSelector(state => state.products[productId]);
    const dispatch = useDispatch();
    const [showIngredients, setShowIngredients] = useState(false);

    useEffect(() => {
        if (productId){

            dispatch(fetchProduct(productId))
        }
    }, [dispatch, productId]);

    if (product === undefined) {
        return null 
    }

    const toggleIngredients = () => {
        setShowIngredients(!showIngredients);
    };
   
    return (
        <>
        <div className='show-page'>
           <div className='prod-sec1'>
                <div className="image-container">
                    <img src={product.photoUrl} />
                </div>
                <div className='name-price-size'>
                    <a  className='brand' href='#'>{product.brand}</a>
                    <div>
                        <p className='name'>{product.name}</p>
                    </div>
                    <b className='price'><strong>${product.price}0</strong> get 25% off you Shobha order when you open and use a Shobha Credit Card today. </b>
                    <span className='size'>Size: {product.size} oz</span>
                </div>
           </div>

           <div className="ingredients">
    
                    <button onClick={toggleIngredients} className='ingredients-button'>
                        <h2>Ingredients</h2>
                        <div>
                            {showIngredients ? '-' : '+'}
                        </div>
                    </button>

                {showIngredients && (
                    <p>{product.ingredients}</p>
                )}
              
            </div>
        </div>
           
        </>
    )
}

export default ProductShow;