import { combineReducers, createStore } from "redux";
import { LoginReducer } from "./Reucers";

const rootReducers = combineReducers({
  auth: LoginReducer,
});

export const store = createStore(rootReducers);
