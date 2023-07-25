import './CartItems.css'
import {useSelector, useDispatch} from "react-redux";
import { useState, useEffect } from 'react';
import { deleteCartItem, updateCartItem } from '../../store/cart_items';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export default function CartIndexItem({cartItem}) {
    const product = useSelector(state => state.products[cartItem.productId])
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(cartItem.quantity);

    useEffect(() => {
        if (cartItem.productId) {
        }
     
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
                <NavLink to={`/products/${product.id}`} className="show-link">
                    <img src={product.photoUrl} />
                </NavLink>
                <div className='cart-item-details'>
                    <NavLink to={`/brands/${product.brand}`} className='brand-link'>
                        <div className='cart-item-brand'><strong>{product.brand}</strong></div>
                    </NavLink>
                    <NavLink to={`/products/${product.id}`} className="prod-show-link">
                        <h1>{product.name}</h1>
                    </NavLink>
                    <div className='cart-item-size'>SIZE {product.size} oz</div>
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