import PropTypes from "prop-types";

export const movieProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  director: PropTypes.string,
  cast: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.objectOf(PropTypes.string).isRequired,
  video: PropTypes.string.isRequired,
  plot: PropTypes.string,
  rating: PropTypes.number.isRequired,
});


export const reviewProps = PropTypes.shape({
  author: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  text: PropTypes.string,
  date: PropTypes.string.isRequired,
});

export const reviewsProps = PropTypes.arrayOf(PropTypes.shape({
  movie: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(reviewProps),
}));

export const moviesProps = PropTypes.shape({
  movies: PropTypes.arrayOf(movieProps).isRequired,
});
