import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import VideoPlayer from "../video-player/video-player.jsx";
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
        <VideoPlayer isMuted={true} isPlaying={isPlaying} video={movie.preview_video_link} poster={movie.preview_image}/>
        {/* <img src={img.tile} alt={title} width="280" height="175" /> */}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${movie.id}`}>
          {movie.name}
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
