import {getGenresList} from "../store/genres/actions";

export const initGenres = () => (dispatch, getState) => {
  const {MOVIES} = getState();
  return dispatch(getGenresList(MOVIES.list));
};


