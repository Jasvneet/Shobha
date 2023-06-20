import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const ProductIndexItem = ({product}) => {
    

    return (
        <li>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
        </li>
    )
}

export default ProductIndexItem;