import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {movieProps} from "../../validation/propTypes";
import {setFavorite, removeFavorite, pullComments, getCurrentMovie, getPromoMovie} from "../../services/movie-service";
import {AppRoute} from "../../common/constants";
import browserHistory from "../../common/browser-history";

const MyListButton = (props) => {

  const {movie, isAuth, promo} = props;

  const isFavorite = () => movie.is_favorite;

  const getButtonSvg = () => {
    if (isFavorite()) {
      return (
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
      );
    } else {
      return (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
      );
    }
  };

  const updateMovieState = (id) => {
    if (promo && promo.id === movie.id) {
      return props.getMovie(id).then(() => props.getPromo());
    } else {
      return props.getMovie(id);
    }
  };

  const performFavoriteAction = (id) => {
    if (!isFavorite()) {
      return setFavorite(id).then(() => updateMovieState(id));
    } else {
      return removeFavorite(id).then(() => updateMovieState(id));
    }
  };

  return (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={() => {
        if (!isAuth) {
          return browserHistory.push(AppRoute.LOGIN);
        }
        return performFavoriteAction(movie.id);
      }}
    >
      {getButtonSvg()}
      <span>My list</span>
    </button>
  );
};

MyListButton.propTypes = {
  movie: movieProps,
  promo: movieProps,
  isAuth: PropTypes.bool,
  getMovie: PropTypes.func,
  getPromo: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    promo: state.MOVIES.promo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getComments: (movieId) => dispatch(pullComments(movieId)),
    getMovie: (id) => dispatch(getCurrentMovie(id)),
    getPromo: () => dispatch(getPromoMovie())
  };
};

export {MyListButton};
export default connect(mapStateToProps, mapDispatchToProps)(MyListButton);
