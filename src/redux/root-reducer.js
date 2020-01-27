import { combineReducers } from 'redux'

import userReducer from './user/user-reducer';
import cartReducer from '../redux/cart/cart.reducer';
import postsReducer from './posts/posts.reducer';
import jacketsReducer from './jackets/jackets.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer,
    posts: postsReducer,
    jackets: jacketsReducer
});