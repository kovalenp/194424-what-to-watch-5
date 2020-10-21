import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import MoviesList from "../movies-list/movies-list";
import GeneresList from "../genres-list/genres-list";
import { movieProps } from "../../validation/propTypes";
import { getMoviesByGenre } from "../../utils/utils";
import { NUM_MOVIES_TO_DISPALY } from "../../common/constants";

class MovieCatalog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredMovies: getMoviesByGenre(props),
      moviesToDisplay: NUM_MOVIES_TO_DISPALY,
    };

    this.handleOnClick = this.handleOnClick.bind(this);

  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeGenre !== this.props.activeGenre || prevProps.movies.length !== this.props.movies.length) {
      this.setState({ filteredMovies: getMoviesByGenre(this.props), moviesToDisplay: NUM_MOVIES_TO_DISPALY });
    }
  }

  handleOnClick() {
    this.setState((prevState) => ({ moviesToDisplay: prevState.moviesToDisplay + NUM_MOVIES_TO_DISPALY }));
  }

  render() {

    const { filteredMovies, moviesToDisplay } = this.state;

    return (
       <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GeneresList />
          <MoviesList movies={filteredMovies.slice(0, moviesToDisplay)} />

        {moviesToDisplay < filteredMovies.length && (<div className="catalog__more">
          <button className="catalog__button" type="button" onClick={this.handleOnClick}>
            Show more
            </button>
        </div>)}
        </section>
    );
  }
}

MovieCatalog.propTypes = {
  movies: PropTypes.arrayOf(movieProps),
  activeGenre: PropTypes.string,
  displayMoviesByGenre: PropTypes.number,
};


const MapStateToProps = (state) => {
  return {
    movies: state.movies,
    activeGenre: state.genres.activeGenre,
    displayMoviesByGenre: state.genres.displayMoviesByGenre
  };
};

export default connect(MapStateToProps, null)(MovieCatalog);
