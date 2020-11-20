import React from "react";
import renderer from "react-test-renderer";
import {MovieCatalog} from "./movie-catalog";
import movie from "../../mocks/movie";
import {activeGenre} from "../../mocks/genres";

jest.mock(`../genres-list/genres-list`, () => ({
  __esModule: true,
  default: () => () => <p>List</p>,
}));

jest.mock(`../movies-list/movies-list`, () => ({
  __esModule: true,
  default: () => () => <p>Hey-Im-List</p>,
}));

describe(`MovieCatalog meets B21`, () => {

  afterAll(() => {
    jest.clearAllMocks();
  });

  it(`and rendered correctly`, () => {
    const tree = renderer.create((
      <MovieCatalog movies={[movie]} activeGenre={activeGenre} displayMoviesByGenre={1}/>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
