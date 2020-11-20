import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";

import Tabs from "./tabs";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

describe(`Tabs meets B21`, () => {

  it(`and rendered correctly for auth'ed`, () => {
    const tree = renderer.create((
      <Tabs
        active={``}
        onActiveChange={() => { }}
      >
        <MockComponent />
        <MockComponent />
        <MockComponent />
      </Tabs>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
