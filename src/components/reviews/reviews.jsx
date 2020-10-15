import React from "react";

const Reviews = (props) => {

  const { reviews } = props;

  return (
    <>
<div className="movie-card__reviews movie-card__row">
              <div className="movie-card__reviews-col">
                <div className="review">
                  <blockquote className="review__quote">
              <p className="review__text">{reviews[0].text}</p>
                    <footer className="review__details">
                      <cite className="review__author">{reviews[0].author}</cite>
                      <time className="review__date" dateTime="2016-12-24">{reviews[0].date}</time>
                    </footer>
                  </blockquote>

            <div className="review__rating">{reviews[0].rating}</div>
                </div>
        </div>
        </div>
    </>
  );

};

export default Reviews;
