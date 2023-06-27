import './CartItems.css'
import {useSelector, useDispatch} from "react-redux";
import { useState, useEffect } from 'react';
import { fetchProduct } from '../../store/products';
import { deleteCartItem, updateCartItem } from '../../store/cart_items';

export default function CartIndexItem({cartItem}) {
    const product = useSelector(state => state.products[cartItem.productId])
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(cartItem.quantity);

    useEffect(() => {
        if (cartItem) {
            dispatch(fetchProduct(cartItem.productId))
        }
        dispatch(updateCartItem(cartItem));
    }, [dispatch])

    const handleDelete = () => {
        dispatch(deleteCartItem(cartItem.id));
    };

const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;
    setQuantity(newQuantity)

    const newCartQuantity = {
        id: cartItem.id,
        product_id: cartItem.product_id,
        quantity: newQuantity
    }

    dispatch(updateCartItem(newCartQuantity))
};

if (product === undefined) {
    return null;
}

    return (
        <>
            <div className='cart-divider'></div>
            <div className='cart-item-card'>
                <img src={product.photoUrl} />
                <div className='cart-item-details'>
                    <div className='cart-item-brand'><strong>{product.brand}</strong></div>
                    <h1>{product.name}</h1>
                    <div className='cart-item-size'>Size: {product.size} oz</div>
                    <div className='edit-delete-cart-item'>
                        <select value={quantity} onChange={handleQuantityChange}>
                            {[...Array(10)].map((_, index) => (
                                <option key={index + 1} value={index + 1}>{index + 1}</option>
                            ))}
                        </select>
                        <button onClick={handleDelete} className='delete-cart-item'>Remove</button>
                    </div>
                </div>
                <div><strong>${product.price}0</strong></div>
            </div>

            
        
        </>
    )
}