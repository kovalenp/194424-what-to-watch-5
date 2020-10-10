import React from "react";
import { Link } from "react-router-dom";

import Footer from "../Footer/footer";
import MoviesList from "../MoviesList/movies-list";
import { moviesProps } from "../../validation/propTypes";

const MyList = ({ movies }) => (
  <>
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img
              src="img/avatar.jpg"
              alt="User avatar"
              width="63"
              height="63"
            />
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MoviesList movies={movies} />
      </section>

      <Footer />
    </div>
  </>
);

MyList.propTypes = moviesProps;

export default MyList;
