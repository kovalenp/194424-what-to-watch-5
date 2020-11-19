import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import App from "./components/app/app";
import reducers from "./store/reducers";
import api from "./services/api";
import {initMovies, getPromoMovie} from "./services/movie-service";
import {initGenres} from "./services/genre-service";
import {checkAuth} from "./services/user-service";
import {redirect} from "./middleware/redirect";

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(initMovies()),
  store.dispatch(getPromoMovie()),
  store.dispatch(checkAuth())
])
  .then(() => store.dispatch(initGenres()))
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById(`root`)
    );
  });

