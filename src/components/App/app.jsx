import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "../Main/main";
import Film from "../Film/film";
import SignIn from "../SignIn/sign-in";
import MyList from "../MyList/my-list";
import AddReview from "../AddReview/add-review";
import Player from "../Player/player";
import { moviesProps } from "../../validation/propTypes";

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
          render={(match) => (
            <Film {...match} movies={props.movies} reviews={props.reviews} />
          )}
        />
        <Route path="/films/:id/review" exact component={AddReview} />
        <Route path="/player/:id" exact component={Player} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = moviesProps;

export default App;
