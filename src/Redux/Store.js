import { combineReducers, createStore } from "redux";
<<<<<<< HEAD
import { LoginReducer } from "./Reucers";

const rootReducers = combineReducers({
  auth: LoginReducer,
});
=======

const rootReducers = combineReducers({});
>>>>>>> cae2ab4e0cd345bc8676078afaff72ddcd8c6bf0

export const store = createStore(rootReducers);
