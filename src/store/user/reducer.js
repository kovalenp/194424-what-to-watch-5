import {UserActionsTypes} from "./actions";
import {AuthStatus} from "../../common/constants";

const initState = {
  authentication: AuthStatus.NOT_AUTH, favorites: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case UserActionsTypes.SET_USER_DATA:
      const {avatarUrl, name} = action.payload;
      return Object.assign({}, state, {avatarUrl, name});
    case UserActionsTypes.SET_AUTH:
      return Object.assign({}, state, {authentication: action.payload.status});
    case UserActionsTypes.SET_FAVORITES:
      return Object.assign({}, state, {favorites: action.payload});
    default:
      return state;
  }
};

export default reducer;
