import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Header from "../header/header";
import Footer from "../footer/footer";
import MoviesList from "../movies-list/movies-list";
import GeneresList from "../genres-list/genres-list";
import { ALL_GENRES } from "../../common/constants";
import { movieProps } from "../../validation/propTypes";

const Main = (props) => {

  const { movies, activeGenre } = props;

  const filterMoviesByGenre = () => {

    if (activeGenre === ALL_GENRES) {
      return movies;
    }

    return movies.filter((movie) => movie.genre === activeGenre);
  };

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movies.length > 0 ? movies[0].title : ``}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movies.length > 0 ? movies[0].genre : ``}</span>
                <span className="movie-card__year">{movies.length > 0 ? movies[0].year : ``}</span>
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
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GeneresList />
          <MoviesList movies={filterMoviesByGenre()} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>

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
