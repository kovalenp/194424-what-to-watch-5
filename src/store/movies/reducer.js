import { MoviesActionsTypes } from "./actions";

const initState = { list: [], promo: null, comments: [], current: null };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case MoviesActionsTypes.INIT_MOVIES:
      return Object.assign({}, state, { list: action.payload });
    case MoviesActionsTypes.GET_MOVIE:
      return Object.assign({}, state, { current: action.payload });
    case MoviesActionsTypes.GET_PROMO:
      return Object.assign({}, state, { promo: action.payload });
    case MoviesActionsTypes.GET_COMMENTS:
      return Object.assign({}, state, { comments: action.payload });
    case MoviesActionsTypes.RESET_CURRENT_MOVIE:
      return Object.assign({}, state, { current: null });
    default:
      return state;
  }
};

export default reducer;
