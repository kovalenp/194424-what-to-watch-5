import { MoviesActionsTypes } from "./actions";

const initState = { list: [], promo: null, comments: [] };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case MoviesActionsTypes.GET_MOVIES:
      return Object.assign({}, state, { list: action.payload });
    case MoviesActionsTypes.GET_PROMO:
      return Object.assign({}, state, { promo: action.payload });
    case MoviesActionsTypes.GET_COMMENTS:
      return Object.assign({}, state, { comments: action.payload});
    default:
      return state;
  }
};

export default reducer;
