import axios from 'axios';
import { ADD_FRIEND_SUCCESS, ADD_FRIEND_FAILURE } from './ActionType';
import { url } from '../Resources';
import * as types from './ActionType';

// Action creators
export const addFriendSuccess = (friendData) => ({
  type: ADD_FRIEND_SUCCESS,
  payload: friendData
});

export const addFriendFailure = (error) => ({
  type: ADD_FRIEND_FAILURE,
  payload: error
});

// Async action to add friend
export const addFriend = (friendData) => {
  return async (dispatch) => {
    try {
      // Send POST request to add friend
      const response = await axios.post(`${url}/user`, friendData);
      // Dispatch success action
      dispatch(addFriendSuccess(response.data));
      // Show success toast message
      // You can implement your toast library or component here
      alert('Friend added successfully!');
    } catch (error) {
      // Dispatch failure action
      dispatch(addFriendFailure(error));
      // Show error toast message if needed
      alert('Failed to add friend!');
    }
  };
};

export const removeFriend = (friendData) => {
  return async (dispatch) => {
    try {
      // Send POST request to add friend
      const response = await axios.post(`${url}/user`, friendData);
      // Dispatch success action
      dispatch(addFriendSuccess(response.data));
      // Show success toast message
      // You can implement your toast library or component here
      alert('Friend removed successfully!');
    } catch (error) {
      // Dispatch failure action
      dispatch(addFriendFailure(error));
      // Show error toast message if needed
      alert('Failed to remove friend!');
    }
  };
};

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

  export const updatePostLikes = (post) => ({
    type: types.UPDATE_POST_LIKES,
    payload: post,
  });

  export const fetchCommentsSuccess = (comments) => ({
    type: types.FETCH_COMMENTS_SUCCESS,
    payload: comments,
  });
  
  export const addCommentSuccess = (comment) => ({
    type: types.ADD_COMMENT_SUCCESS,
    payload: comment,
  });
