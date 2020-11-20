import React from "react";
import renderer from "react-test-renderer";
import {Details} from "./details";
import movie from "../../../test/mock/movie";

it(`Details test to meet B21 criteria`, () => {
  const tree = renderer
    .create(
        <Details
          movie={movie}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
