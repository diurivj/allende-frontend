import {combineReducers} from 'redux';
import products from './productsReducer';
import distReducers from './distReducers';
import promos from './promosReducer';

const rootReducer = combineReducers({
    products,
    distribuidores:distReducers,
  promos
});

export default rootReducer;