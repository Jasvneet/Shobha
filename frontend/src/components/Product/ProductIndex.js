import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductIndexItem from './ProductIndexItem';
import { fetchProducts } from '../../store/products';

const ProductIndex = ()=> {
    const dispatch = useDispatch();
    const products = useSelector(state => Object.values(state.products));

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

   console.log(products);

    return (
        <>
            <ul>
                <h1>Products Index</h1>
                {products.map(product => 
                    <ProductIndexItem product={product}/> 
                    )}
            </ul>
        </>
    )
}

export default ProductIndex;