import React from "react";
import PropTypes from "prop-types";

import Header from "../Header/header";
import Footer from "../Footer/footer";

const Main = ({ movies }) => {
  const movie = movies[0]; // pick up the first passed movie for now

  return (
    <>
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
            <h2 className="movie-card__title">{movie.title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{movie.genre}</span>
              <span className="movie-card__year">{movie.year}</span>
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
      <Footer />
    </>
  );
};

Main.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Main;
