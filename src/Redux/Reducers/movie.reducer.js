//
// Movie reducer
// --------------------------------------

// Set Movies to return action payload
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

export default movies;
