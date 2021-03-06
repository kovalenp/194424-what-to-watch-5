import React from "react";
import PropTypes from "prop-types";

import {reviewProps} from "../../validation/propTypes";
import {formatDate} from "../../utils/utils";

const Reviews = (props) => {

  const {reviews} = props;

  /**
 * Represents a book.
 * @param {Array} arr - List of reviews.
 * @return {{first: Array, second: Array}} - object with reviews in first and second column
 */
  const getColumnsData = (arr) => {
    const chunk = Math.round(arr.length / 2); // split all reviews in two columns
    return {first: arr.slice(0, chunk), second: arr.slice(chunk)};
  };

  const renderColumn = (data) => (
    <div className="movie-card__reviews-col">
      {data.map((rev, i) => (
        <div className="review" key={rev.date + rev.user.id + i}>
          <blockquote className="review__quote">
            <p className="review__text">{rev.comment}</p>
            <footer className="review__details">
              <cite className="review__author">{rev.user.name}</cite>
              <time className="review__date">{formatDate(rev.date)}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{rev.rating}</div>
        </div>
      ))}
    </div>
  );

  const {first, second} = getColumnsData(reviews);

  return (
    <div className="movie-card__reviews movie-card__row">
      {first.length > 0 && renderColumn(first)}
      {second.length > 0 && renderColumn(second)}
    </div>
  );

};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewProps)
};

export default Reviews;
