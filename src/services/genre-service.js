import { getGenresList } from "../store/genres/actions";

export const initGenres = () => (dispatch, getState) => {
  const { movies } = getState();
  return dispatch(getGenresList(movies));
};


