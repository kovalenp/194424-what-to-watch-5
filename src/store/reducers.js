import { combineReducers } from "redux";

import genresReducer from "./genres/reducer";
import moviesReducer from "./movies/reducer";

export default combineReducers({
  genres: genresReducer,
  movies: moviesReducer,
});

