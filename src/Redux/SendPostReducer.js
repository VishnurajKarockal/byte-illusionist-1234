import * as types from './ActionType';

const initialState = {
  loading: false,
  error: null,
};

const sendPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEND_POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.SEND_POST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.SEND_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default sendPostReducer;
