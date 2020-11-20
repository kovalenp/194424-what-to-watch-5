import React from "react";
import renderer from "react-test-renderer";
import {AddNewComment} from "./add-new-comment";
import reviews from "../../mocks/reviews";

it(`AddNewComment test to meet B21 criteria`, () => {
  const tree = renderer
    .create(
        <AddNewComment
          id={1}
          getComments={ ()=>reviews}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
