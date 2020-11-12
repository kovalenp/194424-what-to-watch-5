import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Header from "../header/header";
import AddNewComment from "../add-new-comment/add-new-comment.jsx";
import { movieProps } from "../../validation/propTypes";

const AddReview = ({ movie }) => {

  return (
    <section className="movie-card movie-card--full" style={{backgroundColor: movie.background_color}}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img
            src={movie.background_image}
            alt={movie.name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header />

        <div className="movie-card__poster movie-card__poster--small">
          <img
            src={movie.poster_image}
            alt={`${movie.name} poster`}
            width="218"
            height="327"
          />
        </div>
      </div>

      <AddNewComment id={movie.id}/>
    </section>
  );
};

AddReview.propTypes = {
  movie: movieProps,
  id: PropTypes.string.isRequired,
};

const MapStateToProps = (state, ownProps) => {
  const { list } = state.MOVIES;
  return {
    /* eslint-disable eqeqeq */
    movie: list.find((m) => m.id == ownProps.id),
  };
};


export default connect(MapStateToProps, null)(AddReview);
