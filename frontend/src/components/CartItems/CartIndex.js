import './CartItems.css'
import {useSelector, useDispatch} from "react-redux";
import CartIndexItem from './CartIndexItem';
import { useEffect } from 'react';
import { fetchCartItems } from '../../store/cart_items';
import { fetchCartProducts } from '../../store/products';

export default function CartIndex(){
    const cartItems = useSelector(state => Object.values(state.cartItems))
    const dispatch = useDispatch();
    const products = useSelector(state => Object.values(state.products))

    useEffect(() => {
        // dispatch(fetchCartProducts());
        dispatch(fetchCartItems());
      }, [dispatch]);

    // const totalPrice = cartItems.reduce((acc, cartItem) => {
    // const product = products[cartItem.productId];
    // if (product && product.price && cartItem.quantity) {
    //     const price = product.price * cartItem.quantity;
    //     return acc + price;
    // }
    // return acc;
    // }, 0);

    const totalPrice = 0

    return (
        <>  
        <div className='cart-index-wrapper'>
            <div className='cart-items-wrapper'>
                <h1 className='cart-heading'>My Basket</h1>
                <div className='cart-items-container'>
                    <ul className='cart-items-list'>
                        {cartItems.map(cartItem => (
                            <CartIndexItem cartItem={cartItem} />
                        ))}
                    </ul>

                </div>
            </div>

            <div className='cart-index-total'>
                <div className='total-container'>
                    <div>Merchandise Subtotal</div>
                    <div className='total-price'>${totalPrice}.00</div>
                </div>
                <div className='total-container'>
                    <div>Shipping & Handling</div>
                    <div className='shipping-price'><strong>FREE</strong></div>
                </div>
                <div className='total-container'>
                    <div>Estimated Tax & Other Fees</div>
                    <div className='tax-price'><strong>TBD</strong></div>
                </div>
                <div className='divider'></div>
                <div className='total-container'>
                    <h2>Estimated Total</h2>
                    <div className='estimated-price'><strong>${totalPrice}.00</strong></div>

                </div>
                <button>Checkout Shipped Items</button>
            </div>
        </div>
        </>
    )
}