import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from 'react-router-dom';

import MovieList from "./movies-list";
import movie from "../../mocks/movie";

describe(`MovieList meets B21`, () => {

  afterAll(() => {
    jest.clearAllMocks();
  });

  it(`and rendered correctly`, () => {
    const tree = renderer.create((
      <MemoryRouter>
        <MovieList movies={[movie]} />
      </MemoryRouter>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
