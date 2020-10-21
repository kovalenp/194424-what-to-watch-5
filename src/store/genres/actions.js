export const GenresActionsTypes = {
  SET_ACTIVE_GENRE: `SET_ACTIVE_GENRE`,
  GET_ALL_GENRES: `GET_ALL_GENRES`,
};


export const setGenre = (genre) => ({ type: GenresActionsTypes.SET_ACTIVE_GENRE, payload: genre });
export const getGenresList = (genre) => ({ type: GenresActionsTypes.GET_ALL_GENRES, payload: genre });
