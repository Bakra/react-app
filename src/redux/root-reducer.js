import { combineReducers } from 'redux'

import userReducer from './user/user-reducer';
import cartReducer from '../redux/cart/cart.reducer';
import postsReducer from './posts/posts.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer,
    posts: postsReducer
});