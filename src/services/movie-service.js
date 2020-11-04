import { getMovies } from '../store/movies/actions';

export const initMovies = () => (dispatch, state, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(getMovies(data)))
);
