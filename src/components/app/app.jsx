import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import browserHistory from "../../common/browser-history";
import PrivateRoute from "../../common/private-route";
import Main from "../main/main";
import Film from "../film/film";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import NotFound from "../not-found/not-found";
import {movieProps} from "../../validation/propTypes";
import {AppRoute} from "../../common/constants";
import withMovie from "../../hocs/with-movie/with-movie";

const AddReviewWithMovie = withMovie(AddReview);
const PlayerWithMovie = withMovie(Player);
const FilmWithMovie = withMovie(Film);

const App = (props) => {

  const {movies} = props;

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route path={AppRoute.HOME} exact>
          <Main />
        </Route>
        <Route path={AppRoute.LOGIN} exact component={SignIn} />
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => <MyList movies={movies} />}
        />
        <PrivateRoute
          exact
          path={AppRoute.REVIEW}
          render={({match}) => (<AddReviewWithMovie
            id={match.params.id} />
          )}
        />
        <Route
          path={AppRoute.FILM}
          exact
          render={({match}) => (
            <FilmWithMovie
              id={match.params.id} />
          )}
        />
        <Route path={AppRoute.PLAYER} exact render={({match}) => (
          <PlayerWithMovie
            id={match.params.id} />
        )} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  movies: PropTypes.arrayOf(movieProps),
};

const mapStateToProps = (state) => {
  return {
    movies: state.MOVIES.list,
  };
};

export {App};
export default connect(mapStateToProps, {})(App);
