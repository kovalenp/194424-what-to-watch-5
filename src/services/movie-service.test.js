import MockAdapter from "axios-mock-adapter";
import api from "./api";
import {initMovies} from "./movie-service";
import {MoviesActionsTypes} from "../store/movies/actions";
import {AppRoute} from "../common/constants";
import movie from "../mocks/movie";

describe(`Async operation in movie reducers works`, () => {
  it(`when initMovie call is made`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const movieLoader = initMovies();

    apiMock
      .onGet(AppRoute.FILMS)
      .reply(200, [{data: [movie]}]);

    return movieLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: MoviesActionsTypes.INIT_MOVIES,
          payload: [{data: [movie]}],
        });
      });
  });
});
