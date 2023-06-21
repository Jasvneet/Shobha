import csrfFetch from './csrf';

export const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT'
export const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS'

export const receiveProduct = (payload) => ({
    type: RECEIVE_PRODUCT,
    payload
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

export const fetchSearchResults = (searchTerm) => async (dispatch) => {
    const response = await fetch(`/api/products/search?query=${encodeURIComponent(searchTerm)}`);
    if (response.ok) {
      const data = await response.json();
      dispatch(receiveProducts(data.products));
    }
  };

const productsReducer = (state = {}, action) => {
    let newState = {...state}

    switch (action.type) {
        case RECEIVE_PRODUCTS:
            if (Array.isArray(action.products)) {
                return action.products.reduce((acc, product) => {
                    acc[product.id] = product;
                    return acc;
                }, {});
            } else {
                return action.products;
            }
        case RECEIVE_PRODUCT:
                newState[action.payload.product.id] = action.payload.product;
                return newState;
            default:
                return state;
        }
    }
  
export default productsReducer;