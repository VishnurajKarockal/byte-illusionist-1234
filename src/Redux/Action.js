import * as types from './ActionType';

export const setUser = (user) => ({
    type: types.SET_USER,
    payload: user,
  });

export const sendPostRequest = () => ({
    type: types.SEND_POST_REQUEST,
  });
  
  export const sendPostSuccess = () => ({
    type: types.SEND_POST_SUCCESS,
  });
  
  export const sendPostFailure = (error) => ({
    type: types.SEND_POST_FAILURE,
    payload: error,
  });

export const fetchPostsRequest = () => ({
    type: types.FETCH_POSTS_REQUEST,
  });
  
  export const fetchPostsSuccess = (posts) => ({
    type: types.FETCH_POSTS_SUCCESS,
    payload: posts,
  });
  
  export const fetchPostsFailure = (error) => ({
    type: types.FETCH_POSTS_FAILURE,
    payload: error,
  });