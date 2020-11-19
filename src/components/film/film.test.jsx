import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import {Provider} from "react-redux";
import {Film} from "./film";
import movie from "../../../test/mock/movie";

const mockStore = configureMockStore();

describe(`Should render Film component correctly`, () => {

  let store;

  beforeEach(() => {
    store = mockStore({USER: {authentication: `AUTH`}, MOVIES: {promo: movie}});
  });

  it(`for authenticated user`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <Film
                id={`1`}
                movie={movie}
                movies={[movie]}
                isAuth={true}
                reviews={{list: []}}
                getComments={() => { } }
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`for authenticated user`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <Film
                id={`1`}
                movie={movie}
                movies={[movie]}
                isAuth={false}
                reviews={{list: []}}
                getComments={() => { } }
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
