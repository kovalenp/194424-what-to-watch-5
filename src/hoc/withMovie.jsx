import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getCurrentMovie} from "../services/movie-service";
import NotFound from "../components/not-found/not-found";


const withMovie = (RenderComponent) => {
  class WithMovie extends PureComponent {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      const {getMovie} = this.props;
      if (!this.props.movie || this.props.movie.id !== parseInt(this.props.id, 10)) {
        getMovie(); // we don't pull movie again if movie with this id already present in the store
      }

    }

    render() {


      if (!this.props.movies.find((m) => m.id !== parseInt(this.props.id, 10))) {
        return <NotFound />; // render not found page for assets not present in the service (e.g. films/abc123abc)
      }

      if (!this.props.movie || this.props.movie.id !== parseInt(this.props.id, 10)) {
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
