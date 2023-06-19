import csrfFetch from './csrf';

export const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT'

export const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product
})

export const fetchProduct = (productId) => async(dispatch) => {
    const response = await csrfFetch(`/api/products/${productId}`);

    if (response.ok) {
        const product = await response.json();
        dispatch(receiveProduct(product))
    }
}

const initialState = {
    product: null
  };

const productReducer = (state = {}, action) => {
    console.log(state);
    switch (action.type) {
        case RECEIVE_PRODUCT:
            return {...state, [action.product.id]: action.product};
        default:
            return state;
    }
};
  
export default productReducer;