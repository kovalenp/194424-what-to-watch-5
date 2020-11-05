/* eslint-disable camelcase */
import PropTypes from "prop-types";

export const movieProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string),
  video_link: PropTypes.string.isRequired,
  preview_video_link: PropTypes.string.isRequired,
  poster_image: PropTypes.string.isRequired,
  background_image: PropTypes.string.isRequired,
  preview_image: PropTypes.string.isRequired,
  background_color: PropTypes.string.isRequired,
  description: PropTypes.string,
  rating: PropTypes.number.isRequired,
});

export const reviewProps = PropTypes.shape({
  author: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  text: PropTypes.string,
  date: PropTypes.string.isRequired,
});

export const reviewsProps = PropTypes.arrayOf(PropTypes.shape({
  movie: PropTypes.number,
  reveiws: PropTypes.arrayOf(reviewProps)
}));

