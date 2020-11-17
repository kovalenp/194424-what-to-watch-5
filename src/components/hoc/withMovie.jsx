import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { getMovie } from "../../services/movie-service";

const withMovie = (RenderComponent) => {
  class WithMovie extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        movie: null,
      };
    }

    componentDidMount() {
      const { id } = this.props;
      getMovie(id).then(({ data }) => this.setState({movie: data}));

    }

    render() {

      if (!this.state.movie) {
        return null;
      }

      return (
        <RenderComponent
          {...this.props}
          movie={this.state.movie}
        />
      );
    }
  }

  WithMovie.propTypes = {
    id: PropTypes.string.isRequired,
  };

  return WithMovie;
};

export default withMovie;
