import { ALL_GENRES } from "../common/constants";

export const getMovieCastString = (actors) => {
  let result = ``;

  if (actors.lenght === 1) {
    result += actors[0];
  } else {
    result += actors
      .toString()
      .replaceAll(`,`, `, `) + ` and others`;
  }

  return result;
};


export const getMoviesByGenre = ({ activeGenre, movies }) => {

  if (!movies || !activeGenre) {
    return [];
  }

  if (activeGenre === ALL_GENRES) {
    return movies;
  }
  return movies.filter((movie) => movie.genre === activeGenre);
};
