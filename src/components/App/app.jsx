import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "../Main/main";
import Film from "../Film/film";
import SignIn from "../SignIn/sign-in";
import MyList from "../MyList/my-list";
import AddReview from "../AddReview/add-review";
import Player from "../Player/player";

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main movies={props.movies} />
        </Route>
        <Route path="/login" exact component={SignIn} />
        <Route path="/mylist" exact>
          <MyList movies={props.movies} />
        </Route>
        <Route
          path="/films/:id"
          exact
          render={(match) => <Film {...match} movies={props.movies} />}
        />
        <Route path="/films/:id/review" exact component={AddReview} />
        <Route path="/player/:id" exact component={Player} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default App;
