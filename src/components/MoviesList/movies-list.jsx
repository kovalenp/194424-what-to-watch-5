import React, { PureComponent } from "react";

import SmallMovieCard from "../SmallMovieCard/small-movie-card";
import { moviesProps } from "../../validation/propTypes";

class MoviesList extends PureComponent {
  constructor() {
    super();

    this.state = {
      activeMovie: null,
    };

    this.handleMovieCardMouseEnter = this.handleMovieCardMouseEnter.bind(this);
    this.handleMovieCardMouseLeave = this.handleMovieCardMouseLeave.bind(this);
  }

  handleMovieCardMouseEnter(e) {
    e.preventDefault();
    e.persist();
    this._timeout = setTimeout(() => this.setState({ activeMovie: e.target.id }), 1000);
  }

  handleMovieCardMouseLeave() {
    clearTimeout(this._timeout);
    this.setState({ activeMovie: null });
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {this.props.movies.map((movie) => (
          <SmallMovieCard
            key={movie.id}
            movie={movie}
            isPlaying={movie.id.toString() === this.state.activeMovie}
            onMouseEnterHandler={this.handleMovieCardMouseEnter}
            onMouseLeaveHandler={this.handleMovieCardMouseLeave}
          />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = moviesProps;

export default MoviesList;
