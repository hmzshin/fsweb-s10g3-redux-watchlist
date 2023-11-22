const initialData = 0;

export const nextMovie = () => {
  return { type: "NEXT_MOVIE" };
};
export const previousMovie = () => {
  return { type: "PREVIOUS_MOVIE" };
};
export const startOver = () => {
  return { type: "START_OVER" };
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
