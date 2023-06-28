import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import productsReducer from './products';
import reviewsReducer from './reviews';
import cartItemsReducer from './cart_items';
import lovesReducer from './loves';
import newProductsReducer from './new_products';

const rootReducer = combineReducers({
   session: sessionReducer,
   products: productsReducer,
   reviews: reviewsReducer,
   cartItems: cartItemsReducer,
   loves: lovesReducer,
   newProducts: newProductsReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState = {}) => (
    createStore(rootReducer, preloadedState, enhancer)
  );
  
export default configureStore;