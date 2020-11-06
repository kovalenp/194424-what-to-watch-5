import { combineReducers } from "redux";

import genresReducer from "./genres/reducer";
import moviesReducer from "./movies/reducer";
import userReducer from "./user/reducer";

export default combineReducers({
  genres: genresReducer,
  movies: moviesReducer,
  user: userReducer,
});

