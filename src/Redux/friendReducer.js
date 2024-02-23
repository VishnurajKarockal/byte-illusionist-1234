// reducer.js
import * as actionTypes from './ActionType';

const initialState = {
  loading: false,
  data: {},
  error: ""
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FRIENDS_REQUEST:
      return {
        ...state,
        loading: true,
        error: ""
      };
    case actionTypes.FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ""
      };
    case actionTypes.FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default friendsReducer;
