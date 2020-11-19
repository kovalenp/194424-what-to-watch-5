import {ALL_GENRES, ratings} from "../common/constants";

export const getMovieCastString = (actors) => {
  let result = ``;

  if (actors.lenght === 1) {
    result += actors[0];
  } else {
    result += actors
      .toString()
      .replace(/,/g, `, `) + ` and others`;
  }

  return result;
};


export const getMoviesByGenre = ({activeGenre, movies}) => {

  if (!movies || !activeGenre) {
    return [];
  }

  if (activeGenre === ALL_GENRES) {
    return movies;
  }
  return movies.filter((movie) => movie.genre === activeGenre);
};


export const getRatingLevel = (rating) => {
  if (rating >= 0 && rating < 3) {
    return ratings.BAD;
  }
  if (rating >= 3 && rating < 5) {
    return ratings.NORMAL;
  }
  if (rating >= 5 && rating < 8) {
    return ratings.GOOD;
  }
  if (rating >= 8 && rating < 10) {
    return ratings.VERY_GOOD;
  }
  return ratings.AWESOME;
};


export const formatDate = (timestamp) => {
  const date = Date.parse(timestamp);
  const options = {month: `long`, day: `numeric`, year: `numeric`};
  return Intl.DateTimeFormat(`en-US`, options).format(date);
};
