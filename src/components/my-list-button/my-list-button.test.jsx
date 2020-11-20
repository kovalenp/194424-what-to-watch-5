import React from "react";
import renderer from "react-test-renderer";
import {MyListButton} from "./my-list-button";
import movie from "../../mocks/movie";

describe(`MyListButton meets B21`, () => {

  it(`and rendered correctly for auth'ed`, () => {
    const tree = renderer.create((
      <MyListButton
        movie={movie}
        promo={movie}
        getMovie={() => movie}
        getPromo={()=>movie}
        isAuth={true} />
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`and rendered correctly for non auth'ed`, () => {
    const tree = renderer.create((
      <MyListButton
        movie={movie}
        promo={movie}
        getMovie={() => movie}
        getPromo={()=>movie}
        isAuth={false} />
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
