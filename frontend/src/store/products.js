import { receiveCartItems } from './cart_items';
import csrfFetch from './csrf';
import { receiveReviews } from './reviews';

export const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT';
export const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS';
export const CLEAR_PRODUCTS = 'products/CLEAR_PRODUCTS';


export const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product
})

export const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
})

export const clearProducts = () => ({
    type: CLEAR_PRODUCTS
  });


  

export const fetchProduct = (product) => async(dispatch) => {
    const response = await fetch(`/api/products/${product}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveProduct(data.product));
        dispatch(receiveReviews(data.reviews))
    }
}
export const fetchProducts = () => async(dispatch) => {
    const response = await csrfFetch(`/api/products`);

    if (response.ok) {
        const products = await response.json();
        dispatch(receiveProducts(products));
    }
}

export const fetchCartProducts = () => async(dispatch) => {
    const response = await fetch(`/api/products/cart_items`);

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveProducts(data.products))
        dispatch(receiveCartItems(data.cartItems))
    }
}

export const fetchSearchResults = (searchTerm) => async(dispatch) => {
    const response = await fetch(`/api/products/search?query=${encodeURIComponent(searchTerm)}`);
    if (response.ok) {
      const data = await response.json();
      dispatch(receiveProducts(data));
    }
  };

export const fetchProductsByBrand = (brand) => async(dispatch) => {
    const response = await fetch(`/api/products/brands/${brand}`); 
  
    if (response.ok) {
      const products = await response.json();
      dispatch(receiveProducts(products));
    }
};

export const fetchProductsByCategory = (category) => async(dispatch) => {
    const response = await fetch(`/api/products/categories/${category}`);

    if (response.ok) {
        const products = await response.json();
            dispatch(receiveProducts(products))

        }
}




const initialState = {
    newProducts: {},
   
  };

const productsReducer = (state = initialState, action) => {
    let newState = {...state};

    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {...action.products};
        case RECEIVE_PRODUCT:
            newState[action.product.id] = action.product;
            return newState;
        case CLEAR_PRODUCTS:
            return {};
        default:
            return state;
        }
    }

    
  
export default productsReducer;