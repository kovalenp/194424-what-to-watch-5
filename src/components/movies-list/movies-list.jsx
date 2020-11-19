import React, {useEffect} from "react";
import PropTypes from "prop-types";

import SmallMovieCard from "../small-movie-card/small-movie-card";
import {movieProps} from "../../validation/propTypes";
import withActive from "../../hoc/withActive";

let timeout;

const MoviesList = (props) => {

  const {active, onActiveChange} = props;

  useEffect(() => {
    return () => clearTimeout(timeout);
  }, []);

  const handlerOnEnter = (e) => {
    e.preventDefault();
    e.persist();
    timeout = setTimeout(() => onActiveChange(e, e.target.id), 1000);
  };

  const handlerOnLeave = (e) => {
    clearTimeout(timeout);
    onActiveChange(e, null);
  };

  return (
    <div className="catalog__movies-list">
      {props.movies.map((movie) => (
        <SmallMovieCard
          key={movie.id}
          movie={movie}
          isPlaying={movie.id.toString() === active}
          onMouseEnterHandler={(e) => handlerOnEnter(e)}
          onMouseLeaveHandler={(e) => handlerOnLeave(e)}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieProps),
  active: PropTypes.string,
  onActiveChange: PropTypes.func,
};

export default withActive(MoviesList);
