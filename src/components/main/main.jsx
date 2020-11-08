import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Header from "../header/header";
import Footer from "../footer/footer";
import MovieCatalog from "../movie-catalog/movie-catalog";
import { movieProps } from "../../validation/propTypes";

const Main = (props) => {

  const { movies } = props;

  // main movie to diplay pre-selected, has to be taken from PromoMovie request
  const movie = movies[0];

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img
            src={movie.background_image}
            alt={movie.name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src={movie.poster_image}
                alt={movie.name + ` poster`}
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movies.length > 0 ? movie.name : ``}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movies.length > 0 ? movie.genre : ``}</span>
                <span className="movie-card__year">{movies.length > 0 ? movie.released : ``}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <MovieCatalog />
        <Footer />
      </div>
    </>
  );
};

Main.propTypes = {
  movies: PropTypes.arrayOf(movieProps),
  activeGenre: PropTypes.string,
};

const MapStateToProps = (state) => {
  return {
    movies: state.movies,
    activeGenre: state.genres.activeGenre,
  };
};

export default connect(MapStateToProps, null)(Main);
