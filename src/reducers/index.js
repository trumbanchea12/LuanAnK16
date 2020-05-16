import { combineReducers } from 'redux';
import topproducts from './topproducts';
import cart from './cart';
import signup from './signup';
import user from './user';

const appReducers = combineReducers({
    topproducts,
    cart,
    signup,
    user,
});

export default appReducers;