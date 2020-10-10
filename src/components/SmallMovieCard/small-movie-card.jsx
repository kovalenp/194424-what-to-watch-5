import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SmallMovieCard({
  id,
  title,
  img,
  onMouseEnterHandler,
  onMouseLeaveHandler,
}) {
  return (
    <article className="small-movie-card catalog__movies-card">
      <div
        className="small-movie-card__image"
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        id={id}
      >
        <img src={img.tile} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`films/${id}`}>
          {title}
        </Link>
      </h3>
    </article>
  );
}

SmallMovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.shape({
    poster: PropTypes.string,
    tile: PropTypes.string.isRequired,
  }),
  onMouseEnterHandler: PropTypes.func.isRequired,
  onMouseLeaveHandler: PropTypes.func.isRequired,
  id: PropTypes.number,
};

export default SmallMovieCard;
