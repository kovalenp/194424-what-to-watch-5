import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer";

it(`Footer test to meet B21 criteria`, () => {
  const tree = renderer
    .create(
        <Footer/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
