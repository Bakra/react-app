import { combineReducers } from 'redux'

import userReducer from './user/user-reducer';
import cartReducer from '../redux/cart/cart.reducer';
import hatsReducer from './hats/hats.reducer';
import jacketsReducer from './jackets/jackets.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer,
    hats: hatsReducer,
    jackets: jacketsReducer
});