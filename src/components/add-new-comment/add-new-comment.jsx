import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {sendReveiw} from "../../services/movie-service";

class AddNewComment extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: `3`,
      reviewText: ``,
      isSending: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({isSending: true});
    sendReveiw({id: this.props.id, rating: this.state.rating, comment: this.state.reviewText})
      .then(() => {
        this.setState({isSending: false, reviewText: ``});
      }

      );
  }

  render() {
    return (
      <div className="add-review">
        <form
          action="#"
          className="add-review__form"
          onSubmit={this.handleSubmit}
        >
          <div className="rating">
            <div className="rating__stars">
              <input
                className="rating__input"
                id="star-1"
                type="radio"
                name="rating"
                value="1"
                onChange={this.handleInputChange}
                checked={this.state.rating === `1`}
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
                onChange={this.handleInputChange}
                checked={this.state.rating === `2`}
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
                onChange={this.handleInputChange}
                checked={this.state.rating === `3`}
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
                onChange={this.handleInputChange}
                checked={this.state.rating === `4`}
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
                onChange={this.handleInputChange}
                checked={this.state.rating === `5`}
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
              value={this.state.reviewText}
              onChange={this.handleInputChange}
            ></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={!(this.state.reviewText.length > 50) && !(this.state.isSending)}>
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

AddNewComment.propTypes = {
  id: PropTypes.number.isRequired
};

export default AddNewComment;
