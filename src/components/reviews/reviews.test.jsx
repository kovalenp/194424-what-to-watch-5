import React from "react";
import renderer from "react-test-renderer";
import Reviews from "./reviews";
import reviews from "../../mocks/reviews";

describe(`Reviews meets B21`, () => {

  it(`and rendered correctly for auth'ed`, () => {
    const tree = renderer.create((
      <Reviews
        reviews={reviews} />
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
