import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Product.css'

const ProductIndexItem = ({product}) => {
    

    return (
        <li className='index-item'>
            <div className='index-image-container'>
                <img src={product.photoUrl} />
            </div>
            <span className='brand-index'>{product.brand}</span>
            <NavLink to={`/products/${product.id}`} className="show-link">{product.name}</NavLink>
            <b className='price-index'>${product.price}0</b>
        </li>
    )
}

export default ProductIndexItem;