import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/products';
import './Product.css'

const ProductShow = () => {
    const {productId} = useParams();
    const product = useSelector(state => state.products[productId]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId){

            dispatch(fetchProduct(productId))
        }
    }, [dispatch, productId]);

    if (product === undefined) {
        return null 
    }
   
    return (
        <>
           <div className='prod-sec1'>
                <div className='image'></div>
                <div className='name-price-size'>
                    <a  className='brand' href='#'>{product.brand}</a>
                    <span className='name'>{product.name}</span>
                    <b className='price'>${product.price}</b>
                    <span className='size'>Size: {product.size} oz</span>
                </div>

           </div>
           
        </>
    )
}

export default ProductShow;