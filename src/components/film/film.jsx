import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Header from "../header/header";
import Footer from "../footer/footer";
import MoviesList from "../movies-list/movies-list";
import Tabs from "../tabs/tabs";
import Overview from "../overview/overview";
import Details from "../details/details";
import Reviews from "../reviews/reviews";
import NotFound from "../not-found/not-found";
import { movieProps, reviewsProps } from "../../validation/propTypes";
import { withActive } from "../hoc/withActive";

const ActiveTabs = withActive(Tabs, `Overview`);

const getMoreLikeThisMovies = (movies, genre) => {
  return movies.filter((movie) => movie.genre === genre).slice(0, 4); // На это странице показывается только 4 фильма
};

const Film = (props) => {

  const { movie, movies, reviews } = props;

  if (!movie && movies.length > 0) {
    return <NotFound />;
  }

  if (!movie && movies.length === 0) {
    return null;
  }

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img
              src="img/bg-the-grand-budapest-hotel.jpg"
              alt="The Grand Budapest Hotel"
            />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">Drama</span>
                <span className="movie-card__year">2014</span>
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
                <Link
                  to={`/films/${movie.id}/review`}
                  className="btn movie-card__button"
                >
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">
              <ActiveTabs>
                <Overview label="Overview" movie={movie}/>
                <Details label="Details" movie={movie} />
                <Reviews label="Reviews" reviews={reviews} />
              </ActiveTabs>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList movies={getMoreLikeThisMovies(movies, movie.genre)} />
        </section>

        <Footer />
      </div>
    </>
  );
};


Film.propTypes = {
  movies: PropTypes.arrayOf(movieProps),
  movie: movieProps,
  reviews: reviewsProps,
};

export default Film;
