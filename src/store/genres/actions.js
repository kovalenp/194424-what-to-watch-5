export const GenresActionsTypes = {
  SET_ACTIVE_GENRE: `SET_ACTIVE_GENRE`,
  GET_ALL_GENRES: `GET_ALL_GENRES`,
  INCREASE_DISPLAY_MOVIES: `INCREASE_DISPLAY_MOVIES`,
};


export const setGenre = (genre) => ({ type: GenresActionsTypes.SET_ACTIVE_GENRE, payload: genre });
export const getGenresList = (genre) => ({ type: GenresActionsTypes.GET_ALL_GENRES, payload: genre });
export const increaseDisplayMovies = () => ({ type: GenresActionsTypes.INCREASE_DISPLAY_MOVIES});

