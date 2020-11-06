import browserHistory from "../common/browser-history";
import {ActionType} from "../store/common/actions";

export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    console.log(`I'm here`);
    browserHistory.push(action.payload);
  }

  return next(action);
};
