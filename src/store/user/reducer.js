import { UserActionsTypes } from "./actions";
import { AuthStatus } from "../../common/constants";

const initState = {
  authentication: AuthStatus.NOT_AUTH
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case UserActionsTypes.SET_AUTH:
      return Object.assign({}, state, { authentication: action.payload});
    default:
      return state;
  }
};

export default reducer;
