import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { movieProps } from "../../validation/propTypes";
import { getMovie, resetCurrentMovie } from "../../services/movie-service";
import { appRoute } from "../../common/constants";
import VideoPlayer from "../video-player/video-player.jsx";
import browserHistory from "../../common/browser-history";

const Player = (props) => {

  useEffect(() => {
    props.getMovieById(props.id);
    return () => props.resetCurrent();
  }, []);

  const { movie } = props;

  if (!movie) {
    return null;
  }

  return (
    <div className="player" style= {{backgroundColor: `#000000`}}>

      <VideoPlayer
        width="100%"
        height="100%"
        isPlaying={false}
        video={movie.video_link}
        poster={movie.background_image}
        withControls={true}
      />

      <button
        type="button"
        className="player__exit"
        style={{ top: `12px` }}
        onClick={ () => browserHistory.push(appRoute.FILM.replace(`:id`, movie.id))}>
      Exit
      </button>
    </div>
  );
};

Player.propTypes = {
  movie: movieProps,
  id: PropTypes.string.isRequired,
  getMovieById: PropTypes.func,
  resetCurrent: PropTypes.func,
};

const MapStateToProps = (state) => {
  return {
    movie: state.MOVIES.current,
  };
};

const MapDistpatchToProps = (dispatch) => {
  return {
    getMovieById: (movieId) => dispatch(getMovie(movieId)),
    resetCurrent: () => dispatch(resetCurrentMovie())
  };
};

export default connect(MapStateToProps, MapDistpatchToProps)(Player);
