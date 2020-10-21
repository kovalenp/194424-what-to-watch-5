import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import MoviesList from "../movies-list/movies-list";
import GeneresList from "../genres-list/genres-list";
import { ALL_GENRES } from "../../common/constants";
import { increaseDisplayMovies } from "../../store/genres/actions";
import { movieProps } from "../../validation/propTypes";

class MovieCatalog extends React.Component {
  constructor() {
    super();
    this.filterMoviesByGenre = this.filterMoviesByGenre.bind(this);
  }

  filterMoviesByGenre() {
    const { activeGenre, movies } = this.props;
    if (activeGenre === ALL_GENRES) {
      return movies;
    }
    return movies.filter((movie) => movie.genre === activeGenre);
  }

  render() {

    const { displayMoviesByGenre, showMore } = this.props;

    return (
       <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GeneresList />
          <MoviesList movies={this.filterMoviesByGenre().slice(0, displayMoviesByGenre)} />

        {displayMoviesByGenre < this.filterMoviesByGenre().length && (<div className="catalog__more">
          <button className="catalog__button" type="button" onClick={showMore}>
            Show more
            </button>
        </div>)}
        </section>
    );
  }
}

MovieCatalog.propTypes = {
  movies: PropTypes.arrayOf(movieProps),
  activeGenre: PropTypes.string,
  displayMoviesByGenre: PropTypes.number,
  showMore: PropTypes.func,
};


const MapStateToProps = (state) => {
  return {
    movies: state.movies,
    activeGenre: state.genres.activeGenre,
    displayMoviesByGenre: state.genres.displayMoviesByGenre
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    showMore: () => dispatch(increaseDisplayMovies()),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(MovieCatalog);
