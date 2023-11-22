import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";

export const reducers = combineReducers({});

export const store = createStore(reducers);
