export const MoviesActionsTypes = {
  GET_MOVIES: `GET_MOVIES`,
};

export const getMovies = (data) => {
  return { type: MoviesActionsTypes.GET_MOVIES, payload: data };
};

