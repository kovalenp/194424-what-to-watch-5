import { GenresActionsTypes } from "./actions";
import { ALL_GENRES } from "../../common/constants";

const initState = {
  activeGenre: ALL_GENRES,
  list: []
};

const getUniqueGenres = (movies) => {
  // TODO add reselect here
  const uniqueGenres = movies
    .map((movie) => movie.genre)
    .filter((value, index, self) => self.indexOf(value) === index);
  return [ALL_GENRES].concat(uniqueGenres);
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GenresActionsTypes.SET_ACTIVE_GENRE:
      return Object.assign({}, state, { activeGenre: action.payload});
    case GenresActionsTypes.GET_ALL_GENRES:
      return Object.assign({}, state, { list: getUniqueGenres(action.payload) });
    default:
      return state;
  }
};

export default reducer;
