// import {
//   SET_DOB,
//   SET_EMAIL,
//   SET_F_NAME,
//   SET_GENDER,
//   SET_L_NAME,
//   SET_MOBILE,
//   SET_PASSWORD,
// } from "./ActionType";
// const initialSingleUserState = {
//   id: "",
//   f_name: "",
//   l_name: "",
//   email: "",
//   mobile: "",
//   dob: "",
//   gender: "",
//   password: "",
// };

// export const singelUserReducer = (state = initialSingleUserState, action) => {
//   switch (action.payload) {
//     case SET_F_NAME:
//       return { ...state, f_name: action.payload };
//     case SET_L_NAME:
//       return { ...state, l_name: action.payload };
//     case SET_EMAIL:
//       return { ...state, email: action.payload };
//     case SET_MOBILE:
//       return { ...state, mobile: action.payload };
//     case SET_DOB:
//       return { ...state, dob: action.payload };
//     case SET_GENDER:
//       return { ...state, gender: action.payload };
//     case SET_PASSWORD:
//       return { ...state, password: action.payload };
//     default:
//       return state;
//   }
// };

import {
  LOGGED_IN_USERNAME,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_USER,
} from "./ActionType";

const initialUserDataState = {
  isAuth: false,
  username: "",
};

export const LoginReducer = (state = initialUserDataState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuth: true };
    case LOGGED_IN_USERNAME:
      return { ...state, username: action.payload };
    case LOGIN_FAIL:
      return { ...state, isAuth: false };
    case LOGOUT_USER:
      return { ...state, isAuth: false, username: "" };
    default:
      return state;
  }
};
