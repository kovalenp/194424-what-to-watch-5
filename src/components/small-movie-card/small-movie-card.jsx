import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import VideoPlayer from "../video-player/video-player.jsx";
import {movieProps} from "../../validation/propTypes";
import browserHistory from "../../common/browser-history";

let timeout;

const PLAYBACK_ON_HOVER_TIMEOUT = 1000;

function SmallMovieCard(props) {

  const {active, onActiveChange, movie} = props;


  useEffect(() => {
    return () => clearTimeout(timeout);
  }, []);

  const handlerOnEnter = (e) => {
    e.preventDefault();
    e.persist();
    timeout = setTimeout(() => onActiveChange(e, e.target.id), PLAYBACK_ON_HOVER_TIMEOUT);
  };

  const handlerOnLeave = (e) => {
    clearTimeout(timeout);
    onActiveChange(e, null);
  };

  return (
    <article className="small-movie-card catalog__movies-card">
      <div
        className="small-movie-card__image"
        onMouseEnter={(e) => handlerOnEnter(e)}
        onMouseLeave={(e) => handlerOnLeave(e)}
        onClick={ () => browserHistory.push(`/films/${movie.id}`)}
        id={movie.id}
      >
        <VideoPlayer
          width="280"
          height="175"
          isPlaying={parseInt(active, 10) === parseInt(movie.id, 10)}
          isMuted={true}
          video={movie.preview_video_link}
          poster={movie.preview_image}
        />
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
  active: PropTypes.string,
  onActiveChange: PropTypes.func.isRequired,
};

export {SmallMovieCard};
export default SmallMovieCard;
