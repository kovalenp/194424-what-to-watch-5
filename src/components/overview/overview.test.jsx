import React from "react";
import renderer from "react-test-renderer";
import Overview from "./overview";

import movie from "../../../test/mock/movie";

it(`Should render Overview component correctly`, () => {
  const tree = renderer
    .create(
        <Overview
          movie={ movie}
        />

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
