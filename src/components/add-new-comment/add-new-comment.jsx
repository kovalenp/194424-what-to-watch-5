import React, { PureComponent } from "react";

class AddNewComment extends PureComponent {
  constructor() {
    super();

    this.state = {
      rating: `3`,
      reviewText: ``,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line
    console.log(this.state); // TODO send review to server
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

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="reviewText"
              id="reviewText"
              placeholder="Review text"
              onChange={this.handleInputChange}
            ></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddNewComment;
