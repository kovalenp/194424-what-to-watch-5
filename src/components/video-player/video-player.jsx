import React, { Component, createRef } from "react";
import PropTypes from "prop-types";


class VideoPlayer extends Component {
  constructor() {
    super();
    this.videoRef = createRef();
  }

  componentDidUpdate() {
    const video = this.videoRef.current;
    if (this.props.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  render() {

    const { video, poster, isMuted } = this.props;

    return (
      <video
        ref={this.videoRef}
        muted={isMuted || true}
        src={video}
        poster={poster}
        width="280" height="175">
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool,
  video: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default VideoPlayer;
