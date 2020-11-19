import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {pullComments} from "../../services/movie-service";
import {appRoute} from "../../common/constants";
import browserHistory from "../../common/browser-history";
import {sendReveiw} from "../../services/movie-service";

const AddNewComment = (props) => {

  const [state, setState] = useState({
    rating: `3`,
    reviewText: ``,
    isSending: false,
  });

  const handleInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setState((prevState) => Object.assign({}, prevState, {[key]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState((prevState) => Object.assign({}, prevState, {isSending: true}));
    sendReveiw({id: props.id, rating: state.rating, comment: state.reviewText})
      .then(() => setState((prevState) => Object.assign({}, prevState, {isSending: false, reviewText: ``})))
      .then(() => props.getComments(props.id))
      .then(() => browserHistory.push(appRoute.FILM.replace(`:id`, props.id)));
  };

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        onSubmit={handleSubmit}
      >
        <div className="rating">
          <div className="rating__stars">
            <input
              className="rating__input"
              id="star-1"
              type="radio"
              name="rating"
              value="1"
              onChange={handleInputChange}
              checked={state.rating === `1`}
            />
            <label className="rating__label" htmlFor="star-1">
              Rating 1
            </label>

            <input
              className="rating__input"
              id="star-2"
              type="radio"
              name="rating"
              value="2"
              onChange={handleInputChange}
              checked={state.rating === `2`}
            />
            <label className="rating__label" htmlFor="star-2">
              Rating 2
            </label>

            <input
              className="rating__input"
              id="star-3"
              type="radio"
              name="rating"
              value="3"
              onChange={handleInputChange}
              checked={state.rating === `3`}
            />
            <label className="rating__label" htmlFor="star-3">
              Rating 3
            </label>

            <input
              className="rating__input"
              id="star-4"
              type="radio"
              name="rating"
              value="4"
              onChange={handleInputChange}
              checked={state.rating === `4`}
            />
            <label className="rating__label" htmlFor="star-4">
              Rating 4
            </label>

            <input
              className="rating__input"
              id="star-5"
              type="radio"
              name="rating"
              value="5"
              onChange={handleInputChange}
              checked={state.rating === `5`}
            />
            <label className="rating__label" htmlFor="star-5">
              Rating 5
            </label>
          </div>
        </div>

        <div className="add-review__text"
          style={{backgroundColor: `white`}}>
          <textarea
            className="add-review__textarea"
            name="reviewText"
            id="reviewText"
            placeholder="Review text"
            value={state.reviewText}
            onChange={(e) => handleInputChange(e)}
          ></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={!(state.reviewText.length > 50) && !(state.isSending)}>
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

AddNewComment.propTypes = {
  id: PropTypes.number.isRequired,
  getComments: PropTypes.func,
};


const mapDispatchToProps = (dispatch) => {
  return {
    getComments: (movieId) => dispatch(pullComments(movieId)),
  };
};

export {AddNewComment};
export default connect(null, mapDispatchToProps)(AddNewComment);
