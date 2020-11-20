import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main";
import movie from "../../mocks/movie";

jest.mock(`../header/header`, () => ({
  __esModule: true,
  default: () => () => <p>Header</p>,
}));

jest.mock(`../movie-catalog/movie-catalog`, () => ({
  __esModule: true,
  default: () => () => <p>MovieCatalog</p>,
}));

jest.mock(`../my-list-button/my-list-button`, () => ({
  __esModule: true,
  default: () => () => <button>MyListButton</button>,
}));

describe(`Main meets B21`, () => {

  afterAll(() => {
    jest.clearAllMocks();
  });

  it(`and rendered correctly`, () => {
    const tree = renderer.create((
      <Main promoMovie={movie} isAuth={true}/>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
