import { combineReducers, createStore } from "redux";
import { LoginReducer } from "./Reucers";
import friendsReducer from "./friendReducer";
import sendPostReducer from "./SendPostReducer";
import PostsReducer from "./PostsReducer";


const rootReducers = combineReducers({
  auth: LoginReducer,
  friendspage : friendsReducer,
  sendPost: sendPostReducer,
  posts : PostsReducer,
});

export const store = createStore(rootReducers);

