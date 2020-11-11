export const MoviesActionsTypes = {
  GET_MOVIES: `GET_MOVIES`,
  GET_PROMO: `GET_PROMO`,
  GET_COMMENTS: `GET_COMMENTS`
};

export const getMovies = (data) => {
  return { type: MoviesActionsTypes.GET_MOVIES, payload: data };
};

export const getPromo = (data) => {
  return { type: MoviesActionsTypes.GET_PROMO, payload: data };
};

export const getComments = (data) => {
  return { type: MoviesActionsTypes.GET_COMMENTS, payload: data };
};

