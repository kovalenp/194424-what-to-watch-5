import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getCurrentMovie} from "../services/movie-service";
import NotFound from "../components/not-found/not-found";


const withMovie = (RenderComponent) => (props) => {

  if (!props.movies.find((m) => m.id !== parseInt(props.id, 10))) {
    return <NotFound />; // render not found page for assets not present in the service (e.g. films/abc123abc)
  }

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
};

withMovie.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(withMovie);
