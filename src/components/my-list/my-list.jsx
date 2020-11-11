import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Header from "../header/header";
import Footer from "../footer/footer";
import MoviesList from "../movies-list/movies-list.jsx";
import { movieProps } from "../../validation/propTypes";

const MyList = ({ movies }) => (
  <>
    <div className="user-page">
      <Header pageTitle="My List"/>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MoviesList movies={movies} />
      </section>

      <Footer />
    </div>
  </>
);

MyList.propTypes = {
  movies: PropTypes.arrayOf(movieProps)
};

export default MyList;
