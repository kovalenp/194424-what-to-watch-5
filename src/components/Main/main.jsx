import React from "react";
import PropTypes from "prop-types";

const Main = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.title}>
          {movie.title} {movie.genre} {movie.year}
        </li>
      ))}
    </ul>
  );
};

Main.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      genre: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Main;
