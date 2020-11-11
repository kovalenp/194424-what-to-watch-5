export const MoviesActionsTypes = {
  GET_MOVIES: `GET_MOVIES`,
  GET_PROMO: `GET_PROMO`,
};

export const getMovies = (data) => {
  return { type: MoviesActionsTypes.GET_MOVIES, payload: data };
};

export const getPromo = (data) => {
  return { type: MoviesActionsTypes.GET_PROMO, payload: data };
};

