import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {pullMyFavs} from "../../services/user-service";

import Header from "../header/header";
import Footer from "../footer/footer";
import MoviesList from "../movies-list/movies-list.jsx";
import {movieProps} from "../../validation/propTypes";

const MyList = (props) => {

  useEffect(() => {
    props.getMyFavs();
  }, []);

  return (
    <>
      <div className="user-page">
        <Header pageTitle="My List" />
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MoviesList movies={props.myFavorites} />
        </section>

        <Footer />
      </div>
    </>);

};

MyList.propTypes = {
  myFavorites: PropTypes.arrayOf(movieProps),
  getMyFavs: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.USER.favorites
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMyFavs: () => dispatch(pullMyFavs()),
  };
};

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
