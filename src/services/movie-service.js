import {initMoviesAction, getPromoAction, getCommentsAction, getMovieByIdAction} from '../store/movies/actions';
import {appRoute} from '../common/constants';
import serviceApi from './api';

export const initMovies = () => (dispatch, state, api) => (
  api.get(appRoute.FILMS)
    .then(({data}) => dispatch(initMoviesAction(data)))
);


export const getPromoMovie = () => (dispatch, state, api) => (
  api.get(appRoute.PROMO)
    .then(({data}) => dispatch(getPromoAction(data)))
);

export const pullComments = (id) => (dispatch, state, api) => (
  api.get(appRoute.COMMENTS + `/${id}`)
    .then(({data}) => dispatch(getCommentsAction({id, data})))
);

export const getCurrentMovie = (id) => (dispatch, state, api) => (
  api.get(appRoute.FILMS + `/${id}`)
    .then(({data}) => dispatch(getMovieByIdAction(data)))
);

export const sendReveiw = ({id, rating, comment}) => serviceApi.post(appRoute.COMMENTS + `/${id}`, {rating, comment});
export const setFavorite = (id) => serviceApi.post(appRoute.FAVORITE + `/${id}/1`);

export const getMovie = (id) => serviceApi.get(appRoute.FILMS + `/${id}`);

