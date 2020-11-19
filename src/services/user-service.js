/* eslint-disable no-console */
import { setAuthAction, setUserDataAction, setFavoritesAction } from '../store/user/actions';
import { redirectToRoute } from '../store/common/actions';
import { appRoute } from '../common/constants';
import { authStatus } from '../common/constants';

export const checkAuth = () => (dispatch, state, api) => (
  api.get(appRoute.LOGIN)
    .then(({ data }) => dispatch(setAuthAction({ status: authStatus.AUTH, data})))
    .catch((err) => {
      console.error(err);
      return;
    })
);

export const pullMyFavs = () => (dispatch, state, api) => (
  api.get(appRoute.FAVORITE)
    .then((res) => dispatch(setFavoritesAction(res.data)))
);

export const login = ({ email, password }) => (dispatch, state, api) => (
  api.post(appRoute.LOGIN, { email, password })
    .then((res) => dispatch(setUserDataAction(res.data)))
    .then(() => dispatch(setAuthAction(authStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
    .catch((err) => {
      console.error(err);
      return;
    })
);
