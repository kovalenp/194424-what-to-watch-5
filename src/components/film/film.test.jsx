import React from "react";
import renderer from "react-test-renderer";

import { Film } from "./film";
import movie from "../../../test/mock/movie";

describe(`Should render Filme component correctly`, () => {

  beforeAll(() => {
    jest.mock(`../header/header`, () => () => `MockComponent`);
  });

  it(`for authenticated user`, () => {
    const tree = renderer
      .create(
          <Film
            movie={movie}
            movies={[movie]}
            isAuth={true}
            reviews={{ list: []}}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`for non-authenticated user`, () => {
    const tree = renderer
      .create(
          <Film
            movie={movie}
            movies={[movie]}
            isAuth={false}
            reviews={{ list: []}}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
