import React from "react";
import { getMovieCastString } from "../../utils/utils";

import { movieProps } from "../../validation/propTypes";

const Overview = (props) => {

  const { movie } = props;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{movie.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{movie.plot}</p>
        <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {getMovieCastString(movie.cast)}</strong></p>
      </div>
    </>
  );

};

Overview.propTypes = {
  movie: movieProps
};

export default Overview;
