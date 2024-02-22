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

import { LOGIN_FAIL, LOGIN_SUCCESS } from "./ActionType";

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

export const LoginReducer = (state = false, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { auth: true };
    case LOGIN_FAIL:
      return { auth: false };
    default:
      return state;
  }
};
