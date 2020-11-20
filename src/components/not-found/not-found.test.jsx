import React from "react";
import renderer from "react-test-renderer";
import NotFound from "./not-found";

describe(`NotFound meets B21`, () => {

  it(`and rendered correctly for auth'ed`, () => {
    const tree = renderer.create((
      <NotFound />
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
