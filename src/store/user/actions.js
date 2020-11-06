export const UserActionsTypes = {
  SET_AUTH: `SET_AUTH`,
};

export const setAuth = (status) => ({ type: UserActionsTypes.SET_AUTH, payload: status });

