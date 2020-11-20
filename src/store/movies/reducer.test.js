import reducer from './reducer';
import {MoviesActionsTypes} from './actions';

import movie from "../../mocks/movie";
import reviews from "../../mocks/reviews";

describe(`movies reducer`, () => {

  it(`should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(
        {list: [], promo: null, comments: {movie: ``, list: []}, current: null}
    );
  });

  it(`should handle INIT_MOVIES`, () => {
    expect(reducer({}, {
      type: MoviesActionsTypes.INIT_MOVIES,
      payload: [movie]

    })).toEqual(
        {
          list: [movie],
        }
    );
  });

  it(`should handle GET_PROMO`, () => {
    expect(reducer({}, {
      type: MoviesActionsTypes.GET_PROMO,
      payload: movie

    })).toEqual(
        {
          promo: movie,
        }
    );
  });

  it(`should handle GET_MOVIE`, () => {
    expect(reducer({}, {
      type: MoviesActionsTypes.GET_MOVIE,
      payload: movie

    })).toEqual(
        {
          current: movie,
        }
    );
  });

  it(`should handle GET_COMMENTS`, () => {
    expect(reducer({}, {
      type: MoviesActionsTypes.GET_COMMENTS,
      payload: {id: movie.id, data: reviews}

    })).toEqual(
        {
          comments:
          {
            movie: movie.id,
            list: reviews
          }
        }
    );
  });
});
