import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";

import { movieReducer } from "./reducers/movieReducer";
import { favoriteReducer } from "./reducers/favoriteReducer";
import { orderReducer } from "./reducers/orderReducer";

export const reducers = combineReducers({
  movie: movieReducer,
  favorite: favoriteReducer,
  order: orderReducer,
});

export const store = createStore(reducers);
