import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import VideoPlayer from "../VideoPlayer/video-player";
import { movieProps } from "../../validation/propTypes";


function SmallMovieCard({
  movie,
  isPlaying,
  onMouseEnterHandler,
  onMouseLeaveHandler,
}) {

  return (
    <article className="small-movie-card catalog__movies-card">
      <div
        className="small-movie-card__image"
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        id={movie.id}
      >
        <VideoPlayer isMuted={true} isPlaying={isPlaying} video={movie.video} poster={movie.img.tile}/>
        {/* <img src={img.tile} alt={title} width="280" height="175" /> */}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${movie.id}`}>
          {movie.title}
        </Link>
      </h3>
    </article>
  );
}

SmallMovieCard.propTypes = {
  movie: movieProps,
  isPlaying: PropTypes.bool.isRequired,
  onMouseEnterHandler: PropTypes.func.isRequired,
  onMouseLeaveHandler: PropTypes.func.isRequired,
};

export default SmallMovieCard;
