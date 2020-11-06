/* eslint-disable no-console */
import { setAuth, setUserData } from '../store/user/actions';
import { redirectToRoute } from '../store/common/actions';
import { wtwApi } from './api';
import { authStatus } from '../common/constants';

export const checkAuth = () => (dispatch, state, api) => (
  api.get(wtwApi.LOGIN)
    .then(() => dispatch(setAuth(authStatus.AUTH)))
    .catch((err) => {
      console.error(err);
      return;
    })
);

export const login = ({ email, password }) => (dispatch, state, api) => (
  api.post(wtwApi.LOGIN, { email, password })
    .then((res) => dispatch(setUserData(res.data)))
    .then(() => dispatch(setAuth(authStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
    .catch((err) => {
      console.error(err);
      return;
    })
);
