import React from "react";

import { movieProps } from "../../validation/propTypes";

const Details = (props) => {

  const { movie } = props;

  return (
    <>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{movie.director}</span>
          </p>
          <div className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <ul className="movie-card__details-value" style={{ padding: 0 }}>
              {movie.cast.map((actor, i) => (
                <li style={{ listStyleType: `none` }} key={i}>{actor}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">1h 39m</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{movie.genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{movie.year}</span>
          </p>
        </div>
      </div>
    </>
  );
};

Details.propTypes = {
  movie: movieProps
};

export default Details;
