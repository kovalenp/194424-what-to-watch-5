import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {setGenre} from "../../store/genres/actions";

const GenresList = (props) => {

  const {activeGenre, genres, selectGenre} = props;

  const handleOnClick = (e, genre) => {
    e.preventDefault();
    selectGenre(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => (
        <li key={i} className={(genre === activeGenre) ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
          <a href="#"
            className="catalog__genres-link"
            onClick={(e) => handleOnClick(e, genre)}>
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
};


GenresList.propTypes = {
  activeGenre: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  selectGenre: PropTypes.func,
};

const mapStateToProps = (state) => {

  const {activeGenre, list} = state.GENRES;

  return {
    activeGenre,
    genres: list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectGenre: (genre) => dispatch(setGenre(genre)),
  };
};

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
