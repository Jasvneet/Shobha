import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/products';

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
            <h1>ProductShow</h1>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
        </>
    )
}

export default ProductShow;