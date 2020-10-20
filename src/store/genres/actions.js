export const ActionTypes = {
  SET_GENRE: `SET_GENRE`,
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
};


export const ActionCreator = {
  setGenre: (genre) => ({ type: ActionCreator.SET_GENRE, payload: genre }),
  getMovies: (genre) => ({ type: ActionCreator.GET_MOVIES_BY_GENRE, payload: genre }),
};
