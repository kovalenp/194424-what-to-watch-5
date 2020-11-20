import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Provider} from "react-redux";
import movie from "../../mocks/movie";
import {activeGenre} from "../../mocks/genres";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  MOVIES: {current: movie, promo: movie, list: [movie]},
  USER: {authentication: `AUTH`},
  GENRES: {activeGenre}
});

jest.mock(`../main/main`, () => ({
  __esModule: true,
  default: () => () => <p>Main</p>,
}));

jest.mock(`../film/film`, () => ({
  __esModule: true,
  default: () => () => <p>Film</p>,
}));

jest.mock(`../../hocs/with-movie/with-movie`, () => ({
  __esModule: true,
  default: () => () => <p>withMovie</p>,
}));

jest.mock(`../movie-catalog/movie-catalog`, () => ({
  __esModule: true,
  default: () => () => <p>MovieCatalog</p>,
}));

describe(`App meets B21`, () => {

  afterAll(() => {
    jest.clearAllMocks();
  });

  it(`and rendered correctly`, () => {
    const tree = renderer.create((
      <Provider store={store}>
        <App />
      </Provider>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
