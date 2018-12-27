import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import user from './user';
import category from './category';
import tags from './tags';
import posts from './post';

export default combineReducers({
    routing: routerReducer,
    user,
    category,
    tags,
    posts
});