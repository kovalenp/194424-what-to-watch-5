const initState = {
  activeGenre: `All genres`
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case `f`:
      return true;
    default:
      return state;
  }
};

export default reducer;
