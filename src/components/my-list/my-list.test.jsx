import React from "react";
import renderer from "react-test-renderer";
import {MyList} from "./my-list";
import movie from "../../mocks/movie";

jest.mock(`../header/header`, () => ({
  __esModule: true,
  default: () => () => <p>Header</p>,
}));

jest.mock(`../movies-list/movies-list`, () => ({
  __esModule: true,
  default: () => () => <p>Hey-Im-List</p>,
}));

describe(`MyList meets B21`, () => {

  afterAll(() => {
    jest.clearAllMocks();
  });

  it(`and rendered correctly`, () => {
    const tree = renderer.create((
      <MyList myFavorites={[]} getMyFavs={() => [movie]} />
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
