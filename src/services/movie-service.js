import { initMoviesAction, getMovieAction, getPromoAction, getCommentsAction } from '../store/movies/actions';
import { appRoute } from '../common/constants';
import { createApi } from './api';

const serviceApi = createApi();

export const initMovies = () => (dispatch, state, api) => (
  api.get(appRoute.FILMS)
    .then(({data}) => dispatch(initMoviesAction(data)))
);

export const getMovie = (id) => (dispatch, state, api) => (
  api.get(appRoute.FILMS + `/${id}`)
    .then(({data}) => dispatch(getMovieAction(data)))
);

export const getPromoMovie = () => (dispatch, state, api) => (
  api.get(appRoute.PROMO)
    .then(({data}) => dispatch(getPromoAction(data)))
);

export const pullComments = (id) => (dispatch, state, api) => (
  api.get(appRoute.COMMENTS + `/${id}`)
    .then(({data}) => dispatch(getCommentsAction(data)))
);

export const sendReveiw = ({ id, rating, comment }) => serviceApi.post(appRoute.COMMENTS + `/${id}`, {rating, comment});
