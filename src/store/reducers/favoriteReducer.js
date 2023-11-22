const initialData = [];

export const addFavorite = (movie) => {
  return { type: "ADD_FAVORITE", payload: movie };
};
export const deleteFavorite = (id) => {
  return { type: "DELETE_FAVORITE", payload: id };
};

export const favoriteReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, ...action.payload];
      break;

    case "DELETE_FAVORITE":
      const afterDelete = state.filter(
        (favorite) => favorite.id != action.payload
      );
      return afterDelete;
      break;

    default:
      return state;
      break;
  }
};
