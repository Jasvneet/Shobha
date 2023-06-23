import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductsByBrand } from '../../store/products';

function BrandShow() {
    const {brand} = useParams();
    const dispatch = useDispatch();
    const products = useSelector((state) => Object.values(state.products));

    useEffect(() => {
        dispatch(fetchProductsByBrand(brand));
    }, [dispatch, brand]);

    return (
        <div>
        <h1>{brand} Products</h1>
        {products &&
            Object.values(products).map((product) => (
            <div key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
            </div>
            ))}
        </div>
    );
}

export default BrandShow;