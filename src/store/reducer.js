const initState = {
  genre: `All`
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
