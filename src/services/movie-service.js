import { getMovies, getPromo } from '../store/movies/actions';
import { appRoute } from '../common/constants';

export const initMovies = () => (dispatch, state, api) => (
  api.get(appRoute.FILMS)
    .then(({data}) => dispatch(getMovies(data)))
);

export const getPromoMovie = () => (dispatch, state, api) => (
  api.get(appRoute.PROMO)
    .then(({data}) => dispatch(getPromo(data)))
);
