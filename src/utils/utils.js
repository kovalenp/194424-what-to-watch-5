export const getMovieCastString = (actors) => {
  let result = ``;

  if (actors.lenght === 1) {
    result += actors[0];
  } else {
    for (const actor of actors) {
      result += actor + `, `;
    }
    result += ` and others`;
  }

  return result;
};
