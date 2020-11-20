import React from "react";
import PropTypes from "prop-types";

import SmallMovieCard from "../small-movie-card/small-movie-card";
import {movieProps} from "../../validation/propTypes";
import withActive from "../../hocs/with-active/with-active";

const SmallMovieCardWithActive = withActive(SmallMovieCard);

const MoviesList = (props) => {

  return (
    <div className="catalog__movies-list">
      {props.movies.map((movie) => (
        <SmallMovieCardWithActive
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieProps),
};

export default MoviesList;
