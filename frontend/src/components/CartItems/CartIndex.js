import './CartItems.css'
import {useSelector, useDispatch} from "react-redux";
import CartIndexItem from './CartIndexItem';
import { useEffect } from 'react';
import { fetchCartItems } from '../../store/cart_items';

export default function CartIndex(){
    const cartItems = useSelector(state => Object.values(state.cartItems))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch])


    return (
        <>  
        <div className='cart-items-wrapper'>
            <h1 className='cart-heading'>My Basket</h1>
            <ul className='cart-items-container'>
                {cartItems.map(cartItem => (
                    <CartIndexItem cartItem={cartItem} />
                ))}
            </ul>
        </div>
        </>
    )
}