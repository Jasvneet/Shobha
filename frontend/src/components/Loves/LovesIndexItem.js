import './Loves.css'
import { NavLink, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLoves } from '../../store/loves';
import { fetchProduct } from '../../store/products';

export default function LovesIndexItem({love}) {
    const product = useSelector(state => state.products[love.productId])
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchProduct(love.productId))
    }, [dispatch, love.productId])

    if (product === undefined) {
        return null 
    }


    console.log(product);
    return (
        <>
            <div>{product.name}</div>
        </>
    )
}