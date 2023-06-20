import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductIndexItem from './ProductIndexItem';
import { fetchProducts } from '../../store/products';
import './Product.css'

const ProductIndex = ()=> {
    const dispatch = useDispatch();
    const products = useSelector(state => Object.values(state.products));

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

   console.log(products);

    return (
        <>
            <ul className='products'>
                {products.map(product => 
                    <ProductIndexItem product={product}/> 
                    )}
            </ul>
        </>
    )
}

export default ProductIndex;