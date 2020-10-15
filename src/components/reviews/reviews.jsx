import React from "react";
import PropTypes from "prop-types";

import { reviewProps } from "../../validation/propTypes";

const Reviews = (props) => {

  const { reviews } = props;

  const getColumnsData = (arr) => {
    const chunk = Math.round(arr.length / 2);
    return { first: arr.slice(0, chunk), second: arr.slice(chunk) };
  };

  const renderColumn = (data) => (
    <div className="movie-card__reviews-col">
        {data.map((rev, i) => (
          <div className="review" key={rev.date + rev.author + i}>
                  <blockquote className="review__quote">
              <p className="review__text">{rev.text}</p>
                    <footer className="review__details">
                      <cite className="review__author">{rev.author}</cite>
                      <time className="review__date" dateTime="2016-12-24">{rev.date}</time>
                    </footer>
                  </blockquote>

            <div className="review__rating">{rev.rating}</div>
          </div>
        ))}
      </div>
  );

  const { first, second } = getColumnsData(reviews);

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
