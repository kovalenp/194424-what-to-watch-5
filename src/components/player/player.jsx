import React from "react";

import {movieProps} from "../../validation/propTypes";
import {AppRoute} from "../../common/constants";
import VideoPlayer from "../video-player/video-player.jsx";
import browserHistory from "../../common/browser-history";

const Player = (props) => {

  const {movie} = props;

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
        style={{top: `12px`}}
        onClick={ () => browserHistory.push(AppRoute.FILM.replace(`:id`, movie.id))}>
      Exit
      </button>
    </div>
  );
};

Player.propTypes = {
  movie: movieProps,
};

export default Player;
