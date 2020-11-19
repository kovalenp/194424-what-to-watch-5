import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list";
import {genres, activeGenre} from "../../../test/mock/genres";

it(`GenresList should render correctly`, () => {
  const tree = renderer
    .create(
        <GenresList
          genres={genres}
          activeGenre={activeGenre}
          selectGenre={() => { }}
        />

    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
