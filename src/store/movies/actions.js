export const MoviesActionsTypes = {
  INIT_MOVIES: `INIT_MOVIES`,
  GET_PROMO: `GET_PROMO`,
  GET_COMMENTS: `GET_COMMENTS`,
  GET_MOVIE: `GET_MOVIE`,
};

export const initMoviesAction = (data) => {
  return { type: MoviesActionsTypes.INIT_MOVIES, payload: data };
};

export const getPromoAction = (data) => {
  return { type: MoviesActionsTypes.GET_PROMO, payload: data };
};

export const getCommentsAction = (data) => {
  return { type: MoviesActionsTypes.GET_COMMENTS, payload: data };
};

export const getMovieByIdAction = (data) => {
  return { type: MoviesActionsTypes.GET_MOVIE, payload: data };
};

