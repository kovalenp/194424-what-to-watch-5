import { GenresActionsTypes } from "./actions";
import movies from "../../mocks/movies";
import { ALL_GENRES, NUM_MOVIES_TO_DISPALY } from "../../common/constants";

const initState = {
  activeGenre: ALL_GENRES,
  displayMoviesByGenre: NUM_MOVIES_TO_DISPALY,
  list: []
};

const getUniqueGenres = () => {
  const uniqueGenres = movies
    .map((movie) => movie.genre)
    .filter((value, index, self) => self.indexOf(value) === index);
  return [ALL_GENRES].concat(uniqueGenres);
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GenresActionsTypes.SET_ACTIVE_GENRE:
      return Object.assign({}, state, { activeGenre: action.payload, displayMoviesByGenre: NUM_MOVIES_TO_DISPALY });
    case GenresActionsTypes.GET_ALL_GENRES:
      return Object.assign({}, state, { list: getUniqueGenres() });
    case GenresActionsTypes.INCREASE_DISPLAY_MOVIES:
      return Object.assign({}, state, { displayMoviesByGenre: state.displayMoviesByGenre + NUM_MOVIES_TO_DISPALY });
    default:
      return state;
  }
};

export default reducer;
