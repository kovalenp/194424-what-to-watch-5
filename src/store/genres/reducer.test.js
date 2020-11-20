import reducer from './reducer';
import {GenresActionsTypes} from './actions';
import {ALL_GENRES} from "../../common/constants";
import movie from "../../mocks/movie";

describe(`genres reducer`, () => {

  it(`should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(
        {
          activeGenre: ALL_GENRES,
          list: []
        }
    );
  });

  it(`should handle SET_ACTIVE_GENRE`, () => {
    expect(reducer({}, {
      type: GenresActionsTypes.SET_ACTIVE_GENRE,
      payload: ALL_GENRES

    })).toEqual(
        {
          activeGenre: ALL_GENRES,
        }
    );
  });

  it(`should handle GET_ALL_GENRES`, () => {
    expect(reducer({}, {
      type: GenresActionsTypes.GET_ALL_GENRES,
      payload: [movie]

    })).toEqual(
        {
          list: [ALL_GENRES, movie.genre],
        }
    );
  });
});
