import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {authStatus, appRoute} from "./constants";


const PrivateRoute = (props) => {
  const {render, path, exact, isAuth} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          isAuth
            ? render(routeProps)
            : <Redirect to={appRoute.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.user.authentication === authStatus.AUTH
  };
};

export default connect(mapStateToProps)(PrivateRoute);
