import { getMovies } from '../store/movies/actions';
import { appRoute } from '../common/constants';

export const initMovies = () => (dispatch, state, api) => (
  api.get(appRoute.FILMS)
    .then(({data}) => dispatch(getMovies(data)))
);
