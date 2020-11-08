/* eslint-disable camelcase */
import { UserActionsTypes } from "./actions";
import { authStatus } from "../../common/constants";

const initState = {
  authentication: authStatus.NOT_AUTH
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case UserActionsTypes.SET_USER_DATA:
      const { avatar_url, name } = action.payload;
      return Object.assign({}, state, { avatar_url, name});
    case UserActionsTypes.SET_AUTH:
      return Object.assign({}, state, { authentication: action.payload});
    default:
      return state;
  }
};

export default reducer;
