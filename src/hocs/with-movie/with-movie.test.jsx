import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import {withMovie} from "./with-movie";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Provider} from "react-redux";
import movie from "../../mocks/movie";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({MOVIES: {current: movie, list: [movie]}});

jest.mock(`../../services/movie-service`, () => ({
  __esModule: true,
  default: () => () => <p>MockHeader</p>,
  getCurrentMovie: () => ({type: `MOCK`})
}));

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withMovie(MockComponent);

describe(`withMovie meets B21`, () => {

  afterAll(() => {
    jest.clearAllMocks();
  });

  it(`and rendered correctly (nah, just kidding)`, () => {
    const tree = renderer.create((
      <Provider store={store}>
        <MockComponentWrapped>
          <React.Fragment />
        </MockComponentWrapped>
      </Provider>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
