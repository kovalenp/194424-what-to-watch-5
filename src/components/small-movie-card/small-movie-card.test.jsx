import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from 'react-router-dom';

import SmallMovieCard from "./small-movie-card";
import movie from "../../mocks/movie";

describe(`SmallMovieCard meets B21`, () => {

  it(`and rendered correctly for auth'ed`, () => {
    const tree = renderer.create((
      <MemoryRouter>
        <SmallMovieCard
          movie={movie}
          active={``}
          onActiveChange={() => { }} />
      </MemoryRouter>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
