import React from "react";
import PropTypes from "prop-types";

const Tabs = (props) => {

  const { children } = props;

  return (
      <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {children.map((child, i) => {
            const { label } = child.props;

            return (
              <li
                className="movie-nav__item"
                key={i}
              >
                <a
                  href="#"
                  onClick={(e) => props.onActiveChange(e, label)}
                  className="movie-nav__link">{label}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <>
        {children.map((child) => {
          return (child.props.label !== props.active) ? null : child;
        })}
      </>
    </>
  );
};

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any),
  active: PropTypes.string,
  onActiveChange: PropTypes.func,
};

export default Tabs;
