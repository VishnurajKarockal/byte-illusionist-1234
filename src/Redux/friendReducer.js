import * as types from './ActionType'

// Initial state
const initialState = {
  friends: [],
  error: null
};

// Reducer function
const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_FRIEND_SUCCESS:
      // Add the new friend to the friends array
      return {
        ...state,
        friends: [...state.friends, action.payload],
        error: null
      };
    case types.ADD_FRIEND_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default friendsReducer;
