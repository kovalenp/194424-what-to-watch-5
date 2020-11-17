import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getCurrentMovie } from "../../services/movie-service";
import NotFound from "../not-found/not-found";


const withMovie = (RenderComponent) => {
  class WithMovie extends PureComponent {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      const { getMovie } = this.props;
      // eslint-disable-next-line
      if (!this.props.movie || this.props.movie.id != this.props.id) {
        getMovie(); // we don't pull movie again if movie with this id already present in the store
      }

    }

    render() {

      // eslint-disable-next-line
      if (!this.props.movies.find((m) => m.id == this.props.id)) {
        return <NotFound />; // render not found page for assets not present in the service (e.g. films/abc123abc)
      }

      // eslint-disable-next-line
      if (!this.props.movie || this.props.movie.id != this.props.id) {
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
  };

  const MapStateToProps = (state) => {
    return {
      movie: state.MOVIES.current,
      movies: state.MOVIES.list,

    };
  };

  const MapDispatchToProps = (dispatch, ownProps) => {
    return {
      getMovie: () => dispatch(getCurrentMovie(ownProps.id))
    };
  };

  return connect(MapStateToProps, MapDispatchToProps)(WithMovie);
};

export default withMovie;
