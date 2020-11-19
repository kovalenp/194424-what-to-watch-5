import React from "react";
import PropTypes from "prop-types";

import SmallMovieCard from "../small-movie-card/small-movie-card";
import {movieProps} from "../../validation/propTypes";

const MoviesList = (props) => {

  return (
    <div className="catalog__movies-list">
      {props.movies.map((movie) => (
        <SmallMovieCard
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
