export const UserActionsTypes = {
  SET_AUTH: `SET_AUTH`,
  SET_USER_DATA: `SET_USER_DATA`,
};

export const setAuth = (status) => ({ type: UserActionsTypes.SET_AUTH, payload: status });
export const setUserData = (data) => ({ type: UserActionsTypes.SET_USER_DATA, payload: data });
