import { getMovies, getPromo, getComments } from '../store/movies/actions';
import { appRoute } from '../common/constants';
import { createApi } from './api';

const serviceApi = createApi();

export const initMovies = () => (dispatch, state, api) => (
  api.get(appRoute.FILMS)
    .then(({data}) => dispatch(getMovies(data)))
);

export const getPromoMovie = () => (dispatch, state, api) => (
  api.get(appRoute.PROMO)
    .then(({data}) => dispatch(getPromo(data)))
);

export const pullComments = (id) => (dispatch, state, api) => (
  api.get(appRoute.COMMENTS + `/${id}`)
    .then(({data}) => dispatch(getComments(data)))
);

export const sendReveiw = ({ id, rating, comment }) => serviceApi.post(appRoute.COMMENTS + `/${id}`, {rating, comment});
