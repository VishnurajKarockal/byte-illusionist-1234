import { combineReducers } from 'redux';
import postsReducer from './PostsReducer';
import sendPostReducer from './SendPostReducer';


export const rootReducer = combineReducers({
    sendPost: sendPostReducer,
    posts : postsReducer,
});