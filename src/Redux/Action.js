// actions.js
import * as actionTypes from './ActionType';
import { getFriendsPageInfos } from "../Pages/user";

export const fetchFriendsRequest = () => ({
  type: actionTypes.FETCH_FRIENDS_REQUEST
});

export const fetchFriendsSuccess = (data) => ({
  type: actionTypes.FETCH_FRIENDS_SUCCESS,
  payload: data
});

export const fetchFriendsFailure = (error) => ({
  type: actionTypes.FETCH_FRIENDS_FAILURE,
  payload: error
});

export const fetchFriends = (token) => {
  return async (dispatch) => {
    dispatch(fetchFriendsRequest());
    try {
      const data = await getFriendsPageInfos(token);
      if (data.status === "ok") {
        dispatch(fetchFriendsSuccess(data.data));
      } else {
        dispatch(fetchFriendsFailure(data.data));
      }
    } catch (error) {
      dispatch(fetchFriendsFailure(error.message));
    }
  };
};
