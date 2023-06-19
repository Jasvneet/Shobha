import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/product';

const ProductShow = () => {
    const {productId} = useParams();
    const product = useSelector(state => state.product[productId]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId){

            dispatch(fetchProduct(productId))
        }
    }, [productId]);
    console.log(productId);
    return (
        <>
            <h1>ProductShow</h1>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
        </>
    )
}

export default ProductShow;