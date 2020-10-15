import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "../main/main";
import Film from "../film/film";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
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
          render={({match}) => (
            <Film
              movies={props.movies}
              movie={props.movies.find((movie) => movie.id.toString() === match.params.id)}
              reviews={props.reviews.find((review) => review.movie.toString() === match.params.id).reviews} />
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
