import { combineReducers } from "redux";

import genresReducer from "./genres/reducer";
import moviesReducer from "./movies/reducer";
import userReducer from "./user/reducer";

export default combineReducers({
  GENRES: genresReducer,
  MOVIES: moviesReducer,
  USER: userReducer,
});

