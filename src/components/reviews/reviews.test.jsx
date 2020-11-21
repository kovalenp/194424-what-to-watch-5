import React from "react";
import renderer from "react-test-renderer";
import Reviews from "./reviews";
import reviews from "../../mocks/reviews";

jest.mock(`../../utils/utils`, () => ({
  __esModule: true,
  formatDate: () => `September 3, 2020`,
}));

describe(`Reviews meets B21`, () => {

  it(`and rendered correctly`, () => {
    const tree = renderer.create((
      <Reviews
        reviews={reviews} />
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
