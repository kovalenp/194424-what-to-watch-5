import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Main from "../main/main";
import Film from "../film/film";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import { movieProps, reviewsProps } from "../../validation/propTypes";
import { getMovies } from "../../store/movies/actions";
import { getGenresList } from "../../store/genres/actions";

/**
 * Represents a book.
 * @param {Array} reviews - List of all reviews from API.
 * @param {string} id - Specific MovieId we are looking reveiws for.
 * @return {Array} - List of reviews for movie (empty array if there are no reviews)
 */
const _getReviewsForMovieId = (reviews, id) => {
  const result = reviews.find((review) => review.movie.toString() === id);
  return (result !== undefined) ? result.reviews : [];
};

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.initMovies();
    this.props.initGenres();
  }

  render() {

    const { movies } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Main movies={movies} genres={[`All movies`]}/>
          </Route>
          <Route path="/login" exact component={SignIn} />
          <Route path="/mylist" exact>
            <MyList movies={movies} />
          </Route>
          <Route
            path="/films/:id"
            exact
            render={({ match }) => (
              <Film
                id={match.params.id}
                reviews={_getReviewsForMovieId(this.props.reviews, match.params.id)} />
            )}
          />
          <Route path="/films/:id/review" exact component={AddReview} />
          <Route path="/player/:id" exact component={Player} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

const MapDistpatchToProps = (dispatch) => {
  return {
    initMovies: () => dispatch(getMovies()),
    initGenres: () => dispatch(getGenresList())
  };
};

App.propTypes = {
  movies: PropTypes.arrayOf(movieProps),
  initMovies: PropTypes.func,
  initGenres: PropTypes.func,
  reviews: reviewsProps,
};

export default connect(MapStateToProps, MapDistpatchToProps)(App);
