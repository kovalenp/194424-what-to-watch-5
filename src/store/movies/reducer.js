import { MoviesActionsTypes } from "./actions";
import movies from "../../mocks/movies";

const initState = [];

const reducer = (state = initState, action) => {
  switch (action.type) {
    case MoviesActionsTypes.GET_MOVIES:
      return state.concat(movies);
    default:
      return state;
  }
};

export default reducer;
