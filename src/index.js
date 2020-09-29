/* eslint-disable indent */
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App/app";

const movies = [{ title: `The Godfather`, genre: `Drama`, year: 1972 }];

ReactDOM.render(<App movies={movies} />, document.getElementById(`root`));
