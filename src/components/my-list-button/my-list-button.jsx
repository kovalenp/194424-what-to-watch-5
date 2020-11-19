import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {movieProps} from "../../validation/propTypes";
import {setFavorite, removeFavorite, pullComments, getCurrentMovie} from "../../services/movie-service";
import {appRoute} from "../../common/constants";
import browserHistory from "../../common/browser-history";

const MyListButton = (props) => {

  const {movie, isAuth} = props;

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


  const performFavoriteAction = (id) => {
    if (!isFavorite()) {
      return setFavorite(id).then(() => props.getMovie(id));
    } else {
      return removeFavorite(id).then(() => props.getMovie(id));
    }
  };


  return (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={() => {
        if (!isAuth) {
          return browserHistory.push(appRoute.LOGIN);
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
  isAuth: PropTypes.bool,
  getMovie: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    getComments: (movieId) => dispatch(pullComments(movieId)),
    getMovie: (id) => dispatch(getCurrentMovie(id))
  };
};

export default connect(null, mapDispatchToProps)(MyListButton);
