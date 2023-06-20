import csrfFetch from './csrf';

export const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT'
export const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS'

export const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product
})

export const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
})

export const fetchProduct = (productId) => async(dispatch) => {
    const response = await csrfFetch(`/api/products/${productId}`);

    if (response.ok) {
        const product = await response.json();
        dispatch(receiveProduct(product))
    }
}
export const fetchProducts = () => async(dispatch) => {
    const response = await csrfFetch(`/api/products`);

    if (response.ok) {
        const products = await response.json();
        dispatch(receiveProducts(products))
    }
}

// const initialState = {
//     product: null
//   };

const productsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {...action.products};
        case RECEIVE_PRODUCT:
            return {...state, [action.product.id]: action.product};
        default:
            return state;
    }
};
  
export default productsReducer;