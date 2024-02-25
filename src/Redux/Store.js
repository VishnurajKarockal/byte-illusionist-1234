import { combineReducers, createStore } from "redux";
import { LoginReducer } from "./Reucers";
import friendsReducer from "./friendReducer";

const rootReducers = combineReducers({
  auth: LoginReducer,
  friendspage : friendsReducer,
});

export const store = createStore(rootReducers);
