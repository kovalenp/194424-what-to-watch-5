/* eslint-disable indent */
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app";
import movies from "./mocks/movies";
import reviews from "./mocks/reviews";

ReactDOM.render(
  <App movies={movies} reviews={reviews} />,
  document.getElementById(`root`)
);
