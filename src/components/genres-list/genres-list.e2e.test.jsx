import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { GenresList } from "./genres-list";
import { genres, activeGenre } from "../../../test/mock/genres";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`setGenre() is called when genre title clicked`, () => {
  const selectGenre = jest.fn();

  const wrapper = shallow(
      <GenresList
        genres={genres}
        activeGenre={activeGenre}
        selectGenre={selectGenre}
      />
  );

  const genreLink = wrapper.find(`.catalog__genres-link`).first();
  genreLink.simulate(`click`, {preventDefault: () => {}});
  expect(selectGenre).toHaveBeenCalledTimes(1);
});
