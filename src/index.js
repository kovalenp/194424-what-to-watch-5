/* eslint-disable indent */
import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import App from "./components/app/app";
import genresReducer from "./store/genres/reducer";
import moviesReducer from "./store/movies/reducer";

import reviews from "./mocks/reviews";

const store = createStore(
  combineReducers({genres: genresReducer, movies: moviesReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App reviews={reviews} />
  </Provider>,
  document.getElementById(`root`)
);
