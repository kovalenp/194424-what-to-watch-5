/* eslint-disable no-console */
import { setAuth, setUserData } from '../store/user/actions';
import { redirectToRoute } from '../store/common/actions';
import { appRoute } from '../common/constants';
import { authStatus } from '../common/constants';

export const checkAuth = () => (dispatch, state, api) => (
  api.get(appRoute.LOGIN)
    .then(() => dispatch(setAuth(authStatus.AUTH)))
    .catch((err) => {
      console.error(err);
      return;
    })
);

export const login = ({ email, password }) => (dispatch, state, api) => (
  api.post(appRoute.LOGIN, { email, password })
    .then((res) => dispatch(setUserData(res.data)))
    .then(() => dispatch(setAuth(authStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
    .catch((err) => {
      console.error(err);
      return;
    })
);
