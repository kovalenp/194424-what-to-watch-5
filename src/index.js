/* eslint-disable indent */
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App/app";
import movies from "./mocks/movies";

ReactDOM.render(<App movies={movies} />, document.getElementById(`root`));
