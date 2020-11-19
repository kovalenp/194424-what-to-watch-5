import {MoviesActionsTypes} from "./actions";

const initState = {list: [], promo: null, comments: {movie: ``, list: []}, current: null};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case MoviesActionsTypes.INIT_MOVIES:
      return Object.assign({}, state, {list: action.payload});
    case MoviesActionsTypes.GET_PROMO:
      return Object.assign({}, state, {promo: action.payload.id, current: action.payload});
    case MoviesActionsTypes.GET_COMMENTS:
      return Object.assign({}, state, {comments: {movie: action.payload.id, list: action.payload.data}});
    case MoviesActionsTypes.GET_MOVIE:
      return Object.assign({}, state, {current: action.payload});
    default:
      return state;
  }
};

export default reducer;
