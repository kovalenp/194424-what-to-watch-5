/* eslint-disable indent */
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/app/app";
import genreReducer from "./store/reducer";
import movies from "./mocks/movies";
import reviews from "./mocks/reviews";

const store = createStore(genreReducer);

ReactDOM.render(
  <Provider store={store}>
    <App movies={movies} reviews={reviews} />
  </Provider>,
  document.getElementById(`root`)
);
