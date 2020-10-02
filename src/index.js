/* eslint-disable indent */
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App/app";

const movies = [
  { title: `The Grand Budapest Hotel`, genre: `Drama`, year: 2014 },
];

ReactDOM.render(<App movies={movies} />, document.getElementById(`root`));
