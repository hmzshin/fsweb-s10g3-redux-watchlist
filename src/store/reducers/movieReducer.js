import { movies } from "../../movies";

const addMovie = (obj) => {
  return { type: "ADD_MOVIE", payload: obj };
};
const deleteMovie = (id) => {
  return { type: "DELETE_MOVIE", payload: id };
};

export const movieReducer = (state = movies, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [...state, action.payload];
      break;

    case "DELETE_MOVIE":
      const afterDelete = state.filter((movie) => movie.id != action.payload);
      return afterDelete;
      break;

    default:
      return state;
      break;
  }
};
