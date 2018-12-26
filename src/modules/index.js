import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import user from './user';
import category from './category';

export default combineReducers({
    routing: routerReducer,
    user,
    category
});