import {setAuthAction, setUserDataAction, setFavoritesAction} from '../store/user/actions';
import {redirectToRoute} from '../store/common/actions';
import {AppRoute} from '../common/constants';
import {AuthStatus} from '../common/constants';

export const checkAuth = () => (dispatch, state, api) => (
  api.get(AppRoute.LOGIN)
    .then((res) => dispatch(setUserDataAction(res.data)))
    .then(() => dispatch(setAuthAction({status: AuthStatus.AUTH})))
    .catch(() => {
      return;
    })
);

export const pullMyFavs = () => (dispatch, state, api) => (
  api.get(AppRoute.FAVORITE)
    .then((res) => dispatch(setFavoritesAction(res.data)))
);

export const login = ({email, password}) => (dispatch, state, api) => (
  api.post(AppRoute.LOGIN, {email, password})
    .then((res) => dispatch(setUserDataAction(res.data)))
    .then(() => dispatch(setAuthAction({status: AuthStatus.AUTH})))
    .then(() => dispatch(redirectToRoute(`/`)))
    .catch(() => {
      return;
    })
);
