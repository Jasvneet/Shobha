import './Loves.css'
import { NavLink, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteLove } from '../../store/loves';
import { createCartItem } from '../../store/cart_items';
import { fetchProduct } from '../../store/products';

export default function LovesIndexItem({love}) {
    const product = useSelector(state => state.products[love.productId])
    const currentUser = useSelector(state => state.session.user)
    const [showModal, setShowModal] = useState(false);
    
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log('testing');
        dispatch(fetchProduct(love.productId))
    }, [dispatch])

    if (product === undefined) {
        return null 
    }

    const HandleAddCartItem = (e) => {
        e.preventDefault();
        if (!currentUser){
            setShowModal(true);
            return;
        } 
        const cartItem = {
            product_id: love.productId,
            user_id: currentUser.id,
            quantity: 1
        };
        dispatch(createCartItem(cartItem));

    }


    // console.log(product);
    return (
        <>
            <div className='divider'></div>
            <div className='love-details-container'>
                <NavLink to={`/products/${product.id}`} className="show-link">
                    <img src={product.photoUrl} />
                </NavLink>
                <div className='love-details'>
                    <NavLink to={`/brands/${product.brand}`} className='brand-link'>
                        <div className='brand-index'>{product.brand}</div>
                    </NavLink>
                    <NavLink to={`/products/${product.id}`} className="show-link">{product.name}</NavLink>
                    <div className='love-size'>SIZE {product.size} oz</div>
                </div>
                <div className='price-love'><strong>${product.price}0</strong></div>
                <div className='loves-buttons-container'>
                    <div className='love-index-buttons'>
                        <button onClick={HandleAddCartItem} className='love-cart-button'>Add to Basket</button>
                        <button onClick={(e) => dispatch(deleteLove(love.id))} className='love-delete-button'>
                            <svg><path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}