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

    const { video, poster, isMuted, withControls, width, height } = this.props;

    return (
      <video
        ref={this.videoRef}
        muted={isMuted || false}
        controls={withControls || false}
        src={video}
        poster={poster || ``}
        width={width}
        height={height}>
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool,
  video: PropTypes.string.isRequired,
  poster: PropTypes.string,
  withControls: PropTypes.bool,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default VideoPlayer;
