import React from "react";
import renderer from "react-test-renderer";
import {PrivateRoute} from "./private-route";
import {MemoryRouter} from 'react-router-dom';

it(`PrivateRoute test to meet B21 criteria`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <PrivateRoute />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
