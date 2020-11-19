import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from 'react-router-dom';
import {SignIn} from "./sign-in";


it(`Should render SignIn component correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <SignIn
            isAuth={false}
            onSubmit={() => { }}
          />
        </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
