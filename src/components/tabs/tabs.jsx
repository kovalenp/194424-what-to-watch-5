import React, { Component } from "react";
import PropTypes from "prop-types";

class Tabs extends Component {
  constructor(props) {
    super();

    this.state = {
      activeTab: props.children[0].type.name,
    };
  }


  handleOnClick(label, e) {
    e.preventDefault();
    this.setState({ activeTab: label });
  }

  render() {
    const { children } = this.props;

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
                  onClick={(e) => this.handleOnClick(label, e)}
                  className="movie-nav__link">{label}</a>
              </li>

            );
          })}
        </ul>
      </nav>
      <>
        {children.map((child) => {
          return (child.props.label !== this.state.activeTab) ? null : child;
        })}
      </>
    </>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any),
};

export default Tabs;
