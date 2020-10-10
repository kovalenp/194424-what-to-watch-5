import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import SmallMovieCard from "../SmallMovieCard/small-movie-card";
import moviesProps from "../../validation/movies-props";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovieCard: null,
    };

    this.handleMovieCardMouseEnter = this.handleMovieCardMouseEnter.bind(this);
    this.handleMovieCardMouseLeave = this.handleMovieCardMouseLeave.bind(this);
  }

  handleMovieCardMouseEnter(e) {
    e.preventDefault();
    this.setState({ activeMovieCard: e.target.id });
  }

  handleMovieCardMouseLeave() {
    this.setState({ activeMovieCard: null });
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {this.props.movies.map((movie) => (
          <SmallMovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            img={movie.img}
            onMouseEnterHandler={this.handleMovieCardMouseEnter}
            onMouseLeaveHandler={this.handleMovieCardMouseLeave}
          />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(moviesProps),
};

export default MoviesList;
