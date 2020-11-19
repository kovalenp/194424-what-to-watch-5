import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import MoviesList from "../movies-list/movies-list";
import GeneresList from "../genres-list/genres-list";
import {movieProps} from "../../validation/propTypes";
import {getMoviesByGenre} from "../../utils/utils";
import {NUM_MOVIES_TO_DISPALY} from "../../common/constants";

const MovieCatalog = (props) => {

  const [filteredMovies, setFilteredMovies] = useState(getMoviesByGenre(props));
  const [moviesToDisplay, setMoviesToDisplay] = useState(getMoviesByGenre(NUM_MOVIES_TO_DISPALY));

  useEffect(() => {
    setFilteredMovies(getMoviesByGenre(props));
    setMoviesToDisplay(NUM_MOVIES_TO_DISPALY);
  }, [props.activeGenre, props.movies.length]);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GeneresList />
      <MoviesList movies={filteredMovies.slice(0, moviesToDisplay)} />

      {moviesToDisplay < filteredMovies.length && (<div className="catalog__more">
        <button className="catalog__button" type="button" onClick={() => setMoviesToDisplay(moviesToDisplay + NUM_MOVIES_TO_DISPALY)}>
            Show more
        </button>
      </div>)}
    </section>
  );
};

MovieCatalog.propTypes = {
  movies: PropTypes.arrayOf(movieProps),
  activeGenre: PropTypes.string,
  displayMoviesByGenre: PropTypes.number,
};


const mapStateToProps = (state) => {
  return {
    movies: state.MOVIES.list,
    activeGenre: state.GENRES.activeGenre,
    displayMoviesByGenre: state.GENRES.displayMoviesByGenre
  };
};

export default connect(mapStateToProps, null)(MovieCatalog);
