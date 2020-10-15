import React from "react";

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

export const getMovieCastJsx = (actors) => (
  <>
    {actors.map((actor) => <>{actor}<br /></>)}
  </>
);
