import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import Header from "../header/header";
import Footer from "../footer/footer";
import MovieCatalog from "../movie-catalog/movie-catalog";
import {movieProps} from "../../validation/propTypes";
import browserHistory from "../../common/browser-history";
import {appRoute, authStatus} from "../../common/constants";
import MyListButton from "../my-list-button/my-list-button";

const Main = (props) => {

  const {promoMovie, isAuth} = props;

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img
            src={promoMovie.background_image}
            alt={promoMovie.name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src={promoMovie.poster_image}
                alt={promoMovie.name + ` poster`}
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoMovie.name || ``}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoMovie.genre || ``}</span>
                <span className="movie-card__year">{promoMovie.released || ``}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                  onClick={ () => browserHistory.push(appRoute.PLAYER.replace(`:id`, promoMovie.id))}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <MyListButton movie={promoMovie} isAuth={isAuth}/>
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
  promoMovie: movieProps,
  isAuth: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    promoMovie: state.MOVIES.current,
    isAuth: state.USER.authentication === authStatus.AUTH
  };
};

export default connect(mapStateToProps, null)(Main);
