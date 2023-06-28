export const RECEIVE_NEW_PRODUCTS = 'newProducts/RECEIVE_NEW_PRODUCTS';

// Action creators
export const receiveNewProducts = (products) => ({
  type: RECEIVE_NEW_PRODUCTS,
  products,
});

export const fetchNewProducts = () => async(dispatch) => {
    const response = await fetch(`/api/products/categories/New`);

    if (response.ok) {
        const products = await response.json();
            dispatch(receiveNewProducts(products))

        }
}

// Reducer
const initialState = [];
const newProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_NEW_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};

export default newProductsReducer;