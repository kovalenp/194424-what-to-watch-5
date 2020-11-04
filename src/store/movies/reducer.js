import { MoviesActionsTypes } from "./actions";

const initState = [];

const reducer = (state = initState, action) => {
  switch (action.type) {
    case MoviesActionsTypes.GET_MOVIES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
