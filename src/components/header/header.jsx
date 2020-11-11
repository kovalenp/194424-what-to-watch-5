import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { authStatus } from '../../common/constants';

const Header = ({ pageTitle }) => {

  const isAuth = useSelector((state) => state.USER.authentication === authStatus.AUTH);
  const avatar = useSelector((state) => state.USER.avatar_url);


  let userBlock = (
    <Link
      to={`/login`}
      className="logo__link"
    > Sign In
    </Link>);

  if (isAuth) {
    userBlock = (
      <div className="user-block__avatar">
        <Link
          to={`/mylist`}
        >
          <img src={avatar || `img/avatar.jpg`} alt="User avatar" width="63" height="63" />
        </Link>
      </div>
    );
  }

  return (
    <header className="page-header user-page__head">
      <div className="logo">
        <Link
          to={`/`}
          className="logo__link"
        >
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      { pageTitle ? <h1 className="page-title user-page__title">{pageTitle}</h1> : null }

      <div className="user-block">
        { userBlock }
      </div>
    </header>
  );
};

Header.propTypes = {
  pageTitle: PropTypes.string,
};

export default Header;
