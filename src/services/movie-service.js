import { getMovies } from '../store/movies/actions';
import { wtwApi } from './api';

export const initMovies = () => (dispatch, state, api) => (
  api.get(wtwApi.FILMS)
    .then(({data}) => dispatch(getMovies(data)))
);
