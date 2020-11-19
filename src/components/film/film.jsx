import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import Header from "../header/header";
import Footer from "../footer/footer";
import MoviesList from "../movies-list/movies-list";
import Tabs from "../tabs/tabs";
import Overview from "../overview/overview";
import Details from "../details/details";
import Reviews from "../reviews/reviews";
import {movieProps} from "../../validation/propTypes";
import {pullComments, setFavorite} from "../../services/movie-service";
import {appRoute, authStatus} from "../../common/constants";
import withActive from "../../hoc/withActive";
import withMovie from "../../hoc/withMovie";
import browserHistory from "../../common/browser-history";

const ActiveTabs = withActive(Tabs, `Overview`);

const getMoreLikeThisMovies = (movies, genre) => {
  return movies.filter((movie) => movie.genre === genre).slice(0, 4); // This page only needs for movies
};

const Film = (props) => {


  useEffect(() => {
    // eslint-disable-next-line
    if (props.reviews.list.length < 1 || props.reviews.movie != props.id) {
      props.getComments(props.id); // we don't pull comments again if comments with this movieId already present in the store
    }
  }, []);

  const {movie, movies, isAuth} = props;

  return (
    <>
      <section className="movie-card movie-card--full" style={{backgroundColor: movie.background_color}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img
              src={movie.background_image}
              alt={movie.name}
            />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movie.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movie.genre}</span>
                <span className="movie-card__year">{movie.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                  onClick={ () => browserHistory.push(appRoute.PLAYER.replace(`:id`, movie.id))}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                  onClick={() => {
                    if (isAuth) {
                      return setFavorite(movie.id);
                    } else {
                      return browserHistory.push(appRoute.LOGIN);
                    }
                  }}
                ><svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                {isAuth && <Link
                  to={`/films/${movie.id}/review`}
                  className="btn movie-card__button"
                >
                  Add review
                </Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src={movie.poster_image}
                alt={movie.name + ` poster`}
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">
              <ActiveTabs>
                <Overview label="Overview" movie={movie}/>
                <Details label="Details" movie={movie} />
                <Reviews label="Reviews" reviews={props.reviews.list} />
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
  id: PropTypes.string.isRequired,
  reviews: PropTypes.object,
  getComments: PropTypes.func,
  isAuth: PropTypes.bool,
};

const mapStateToProps = (state) => {
  const {list, comments} = state.MOVIES;
  return {
    movies: list,
    reviews: comments,
    isAuth: state.USER.authentication === authStatus.AUTH
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getComments: (movieId) => dispatch(pullComments(movieId)),
  };
};

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(withMovie(Film));

