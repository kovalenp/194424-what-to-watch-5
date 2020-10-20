import { MoviesActionsTypes } from "./actions";
import movies from "../../mocks/movies";

const initState = {
  list: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case MoviesActionsTypes.GET_MOVIES:
      return Object.assign(state, { list: movies });
    default:
      return state;
  }
};

export default reducer;
