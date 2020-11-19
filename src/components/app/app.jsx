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
import {appRoute} from "../../common/constants";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {

    const {movies} = this.props;

    return (
      <Router history={browserHistory}>
        <Switch>
          <Route path={appRoute.HOME} exact>
            <Main />
          </Route>
          <Route path={appRoute.LOGIN} exact component={SignIn} />
          <PrivateRoute
            exact
            path={appRoute.MY_LIST}
            render={() => <MyList movies={movies} />}
          />
          <PrivateRoute
            exact
            path={appRoute.REVIEW}
            render={({match}) => (<AddReview
              id={match.params.id} />
            )}
          />
          <Route
            path={appRoute.FILM}
            exact
            render={({match}) => (
              <Film
                id={match.params.id} />
            )}
          />
          <Route path={appRoute.PLAYER} exact render={({match}) => (
            <Player
              id={match.params.id} />
          )} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.MOVIES.list,
  };
};

App.propTypes = {
  movies: PropTypes.arrayOf(movieProps),
};

export default connect(mapStateToProps, {})(App);
