import './CartItems.css'
import {useSelector, useDispatch} from "react-redux";
import { useState, useEffect } from 'react';
import { fetchProduct } from '../../store/products';

export default function CartIndexItem({cartItem}) {
    const product = useSelector(state => state.products[cartItem.productId])
    const dispatch = useDispatch();

    useEffect(() => {
        if (cartItem) {
            dispatch(fetchProduct(cartItem.productId))
        }
    }, [dispatch])

    if (product === undefined) {
        return null;
    }

    return (
        <>
            <div className='divider'></div>
            <div className='cart-item-card'>
                <img src={product.photoUrl} />
                <div className='cart-item-details'>
                    <div className='cart-item-brand'><strong>{product.brand}</strong></div>
                    <h1>{product.name}</h1>
                    <div className='cart-item-size'>Size: {product.size} oz</div>
                </div>
                <div><strong>${product.price}0</strong></div>
            </div>

            <div className='divider'></div>
        
        </>
    )
}