
import { applyMiddleware, combineReducers, createStore } from "redux";
// import { rootReducer } from "./Reducers";
import { thunk } from "redux-thunk";
import friendsReducer from "./friendReducer";


export const rootReducer = combineReducers({
      friendspage : friendsReducer,
    });

export const store = createStore(rootReducer, applyMiddleware(thunk));


// import { combineReducers, createStore } from "redux";

// const rootReducers = combineReducers({});

// export const store = createStore(rootReducers);
