import { setAuth } from '../store/user/actions';
import { wtwApi } from './api';
import { AuthStatus } from '../common/constants';

export const checkAuth = () => (dispatch, state, api) => (
  api.get(wtwApi.LOGIN)
    .then(() => dispatch(setAuth(AuthStatus.AUTH)))
    .catch((err) => {
      return;
    })
);

export const login = ({ email, password }) => (dispatch, state, api) => (
  api.post(wtwApi.LOGIN, { email, password })
    .then(() => dispatch(setAuth(AuthStatus.AUTH)))
    .catch((err) => {
      return;
    })
);
