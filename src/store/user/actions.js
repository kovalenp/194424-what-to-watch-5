export const UserActionsTypes = {
  SET_AUTH: `SET_AUTH`,
  SET_USER_DATA: `SET_USER_DATA`,
  SET_FAVORITES: `SET_FAVORITES`,
};

export const setAuthAction = (status) => ({ type: UserActionsTypes.SET_AUTH, payload: status });
export const setUserDataAction = (data) => ({ type: UserActionsTypes.SET_USER_DATA, payload: data });
export const setFavoritesAction = (data) => ({ type: UserActionsTypes.SET_FAVORITES, payload: data });
