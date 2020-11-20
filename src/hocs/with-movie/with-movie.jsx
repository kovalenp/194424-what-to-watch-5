import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getCurrentMovie} from "../../services/movie-service";

const withMovie = (RenderComponent) => {
  function WithMovie(props) {

    if (!props.movie || props.movie.id !== parseInt(props.id, 10)) {
      const {getMovie} = props;
      getMovie();
      return null;
    }

    return (
      <RenderComponent
        {...props}
        movie={props.movie}
      />
    );

  }

  WithMovie.propTypes = {
    id: PropTypes.string.isRequired,
    getMovie: PropTypes.func,
    movie: PropTypes.object,
    movies: PropTypes.array,
  };

  const mapStateToProps = (state) => {
    return {
      movie: state.MOVIES.current,
      movies: state.MOVIES.list,
    };
  };

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      getMovie: () => dispatch(getCurrentMovie(ownProps.id))
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithMovie);
};

export {withMovie};
export default withMovie;
