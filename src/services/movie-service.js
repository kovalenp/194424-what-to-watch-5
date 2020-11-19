import {initMoviesAction, getPromoAction, getCommentsAction, getMovieByIdAction} from '../store/movies/actions';
import {AppRoute} from '../common/constants';
import serviceApi from './api';

export const initMovies = () => (dispatch, state, api) => (
  api.get(AppRoute.FILMS)
    .then(({data}) => dispatch(initMoviesAction(data)))
);

export const getPromoMovie = () => (dispatch, state, api) => (
  api.get(AppRoute.PROMO)
    .then(({data}) => dispatch(getPromoAction(data)))
);

export const pullComments = (id) => (dispatch, state, api) => (
  api.get(AppRoute.COMMENTS + `/${id}`)
    .then(({data}) => dispatch(getCommentsAction({id, data})))
);

export const getCurrentMovie = (id) => (dispatch, state, api) => (
  api.get(AppRoute.FILMS + `/${id}`)
    .then(({data}) => dispatch(getMovieByIdAction(data)))
    .catch(() => { }) // add logger if needed
);

export const sendReveiw = ({id, rating, comment}) => serviceApi.post(AppRoute.COMMENTS + `/${id}`, {rating, comment});
export const setFavorite = (id) => serviceApi.post(AppRoute.FAVORITE + `/${id}/1`);
export const removeFavorite = (id) => serviceApi.post(AppRoute.FAVORITE + `/${id}/0`);
export const getMovie = (id) => serviceApi.get(AppRoute.FILMS + `/${id}`);
