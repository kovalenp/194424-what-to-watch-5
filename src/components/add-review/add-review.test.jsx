import React from "react";
import renderer from "react-test-renderer";
import {AddReview} from "./add-review";
import movie from "../../mocks/movie";

jest.mock(`../header/header`, () => ({
  __esModule: true,
  default: () => () => <p>MockHeader</p>,
}));

jest.mock(`../add-new-comment/add-new-comment.jsx`, () => ({
  __esModule: true,
  default: () => () => <div>AddNewCommentMock</div>,
}));

it(`AddReview test to meet B21 criteria`, () => {
  const tree = renderer
    .create(
        <AddReview
          movie={movie}
          id={`2`}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
