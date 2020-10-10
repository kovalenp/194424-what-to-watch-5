import React from "react";
import PropTypes from "prop-types";

function SmallMovieCard({ title, img, onMouseOverHandler }) {
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image" onMouseOver={onMouseOverHandler}>
        <img src={img.tile} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {title}
        </a>
      </h3>
    </article>
  );
}

SmallMovieCard.propTypes =
  PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.shape({
      poster: PropTypes.string,
      tile: PropTypes.string.isRequired,
    }),
    onMouseOverHandler: PropTypes.func.isRequired,
  };


export default SmallMovieCard;
