import { combineReducers } from 'redux';
import postsReducer from './PostsReducer';
import sendPostReducer from './SendPostReducer';
import sessionReducer from './SessionReducer';

export const rootReducer = combineReducers({
    sendPost: sendPostReducer,
    getPosts : postsReducer,
    session: sessionReducer,
});