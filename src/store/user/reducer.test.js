import reducer from './reducer';
import {UserActionsTypes} from './actions';
import {AuthStatus} from "../../common/constants";

import movie from "../../mocks/movie";

// Setup Test Data
const AVATAR_URL = `https://mock.io`;
const USER_NAME = `Mock`;

describe(`user reducer`, () => {

  it(`should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(
        {
          authentication: AuthStatus.NOT_AUTH, favorites: []
        }
    );
  });

  it(`should handle SET_USER_DATA`, () => {
    expect(reducer({}, {
      type: UserActionsTypes.SET_USER_DATA,
      payload: {avatarUrl: AVATAR_URL, name: USER_NAME}

    })).toEqual({avatarUrl: AVATAR_URL, name: USER_NAME});
  });

  it(`should handle SET_AUTH`, () => {
    expect(reducer({}, {
      type: UserActionsTypes.SET_AUTH,
      payload: {status: AuthStatus.AUTH}

    })).toEqual(
        {authentication: AuthStatus.AUTH}
    );
  });

  it(`should handle SET_FAVORITES`, () => {
    expect(reducer({}, {
      type: UserActionsTypes.SET_FAVORITES,
      payload: [movie]

    })).toEqual(
        {favorites: [movie]}
    );
  });
});
