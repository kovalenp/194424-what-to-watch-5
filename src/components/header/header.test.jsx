import React from "react";
import {MemoryRouter} from 'react-router-dom';
import renderer from "react-test-renderer";
import configureMockStore from 'redux-mock-store';
import {Provider} from "react-redux";

import {Header} from "./header";

const mockStore = configureMockStore();

describe(`Should render Header component correctly`, () => {

  it(`for authenticated user`, () => {
    const store = mockStore({USER: {authentication: `AUTH`}});
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <Header />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`for nonauthenticated user`, () => {
    const store = mockStore({USER: {authentication: `NOT_AUTH`}});
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <Header />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
