const initialData = 0;

export const nextMovie = () => {
  return { type: "NEXT_MOVIE"};
};
export const previousMovie = (value) => {
  return { type: "PREVIOUS_MOVIE", payload: value };
};
export const startOver = (value) => {
  return { type: "START_OVER", payload: value };
};

export const orderReducer = (state = initialData, action) => {
  switch (action.type) {
    case "NEXT_MOVIE":
      return state + 1;
      break;

    case "PREVIOUS_MOVIE":
      return state - 1;
      break;

    case "START_OVER":
      return 0;
      break;

    default:
      return state;
      break;
  }
};
