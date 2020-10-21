export const MoviesActionsTypes = {
  GET_MOVIES: `GET_MOVIES`,
};


export const getMovies = () => {
  return { type: MoviesActionsTypes.GET_MOVIES };
};

