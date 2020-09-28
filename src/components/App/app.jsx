import React from "react";
import PropTypes from "prop-types";

import Main from "../Main/main";

const App = (props) => {
  return (
    <div>
      <Main movies={props.movies} />
    </div>
  );
};

App.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      genre: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default App;
