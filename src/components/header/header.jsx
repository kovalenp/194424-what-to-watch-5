import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { authStatus } from '../../common/constants';

const Header = () => {

  const isAuth = useSelector((state) => state.user.authentication === authStatus.AUTH);
  const avatar = useSelector((state) => state.user.avatar_url);


  let userBlock = (
    <Link
      to={`/login`}
      className="logo__link"
    > Sign In
    </Link>);

  if (isAuth) {
    userBlock = (
      <div className="user-block__avatar">
        <img src={avatar || `img/avatar.jpg`} alt="User avatar" width="63" height="63" />
      </div>
    );
  }

  return (
    <header className="page-header movie-card__head">
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
      <div className="user-block">
        { userBlock }
      </div>
    </header>
  );
};

export default Header;
