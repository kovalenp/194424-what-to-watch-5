import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./components/app/app";
import reducers from "./store/reducers";
import { createApi } from "./services/api";
import reviews from "./mocks/reviews";
import { initMovies } from "./services/movie-service";
import { initGenres } from "./services/genre-service";
import { checkAuth } from "./services/user-service";

const api = createApi();

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([
  store.dispatch(initMovies()),
  store.dispatch(checkAuth())
])
  .then(() => store.dispatch(initGenres()))
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App reviews={reviews} />
        </Provider>,
        document.getElementById(`root`)
    );
  });

