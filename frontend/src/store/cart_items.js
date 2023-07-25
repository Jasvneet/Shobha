import csrfFetch from './csrf';

export const RECEIVE_CART_ITEMS = 'cartItems/RECEIVE_CART_ITEMS'
export const RECEIVE_CART_ITEM = 'cartItems/RECEIVE_CART_ITEM'
export const REMOVE_CART_ITEM = 'cartItems/REMOVE_CART_ITEM'

export const receiveCartItems = (cartItems) => ({
    type: RECEIVE_CART_ITEMS,
    cartItems
})

export const receiveCartItem = (cartItem) => ({
    type: RECEIVE_CART_ITEM,
    cartItem
})

export const removeCartItem = (cartItemId) => ({
    type: REMOVE_CART_ITEM,
    cartItemId
})

export const fetchCartItems = () => async(dispatch) => {
    const response = await fetch(`/api/cart_items`);

    if (response.ok) {
        const cartItems = await response.json();
        dispatch(receiveCartItems(cartItems))
    }
}


export const fetchCartItem = (cartItemId) => async(dispatch) => {
    const response = await fetch(`/api/cart_items/${cartItemId}`);

    if (response.ok) {
        const cartItem = await response.json();
        dispatch(receiveCartItems(cartItem))
    }
}

export const deleteCartItem = (cartItemId) => async(dispatch) => {
    const response = await csrfFetch(`/api/cart_items/${cartItemId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(removeCartItem(cartItemId))
    }
}

export const updateCartItem = (cartItem) => async(dispatch) => {
    const response = await csrfFetch(`/api/cart_items/${cartItem.id}`, {
        method: 'PATCH', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(cartItem)
    });

    if (response.ok) {
        const updatedCartItem = await response.json();
        dispatch(receiveCartItem(updatedCartItem));
    }
}

export const createCartItem = (cartItem) => async(dispatch) => {
    const response = await csrfFetch(`/api/cart_items`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(cartItem)
    });

    if (response.ok) {
        const newCartItem = await response.json();
        dispatch(receiveCartItem(newCartItem));
    }
}


export default function cartItemsReducer(state = {}, action) {
    let newState = {...state}
    switch (action.type) {
        case RECEIVE_CART_ITEMS: 
            return {...action.cartItems};
        case RECEIVE_CART_ITEM:
            return {...state, [action.cartItem.id]: action.cartItem}
        case REMOVE_CART_ITEM:
            const cartItemId = action.cartItemId;
            delete newState[cartItemId];
            return newState;
        default: 
            return state;
    }
}