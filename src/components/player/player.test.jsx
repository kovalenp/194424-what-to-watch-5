import React from "react";
import renderer from "react-test-renderer";
import Player from "./player";
import movie from "../../mocks/movie";

describe(`Player meets B21`, () => {

  it(`and rendered correctly for auth'ed`, () => {
    const tree = renderer.create((
      <Player
        movie={movie} />
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
