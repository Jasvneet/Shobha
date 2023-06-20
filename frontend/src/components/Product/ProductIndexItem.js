import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Product.css'

const ProductIndexItem = ({product}) => {
    

    return (
        <li className='index-item'>
            <span className='brand-index'>{product.brand}</span>
            <NavLink to={`/products/${product.id}`} className="show-link">{product.name}</NavLink>
            <span className='price-index'>${product.price}</span>
        </li>
    )
}

export default ProductIndexItem;