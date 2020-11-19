import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getCurrentMovie} from "../services/movie-service";

const withMovie = (RenderComponent) => {
  class WithMovie extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {

      if (!this.props.movie || this.props.movie.id !== parseInt(this.props.id, 10)) {
        const {getMovie} = this.props;
        getMovie();
        return null;
      }

      return (
        <RenderComponent
          {...this.props}
          movie={this.props.movie}
        />
      );
    }
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

export default withMovie;
