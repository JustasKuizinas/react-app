import { Action } from 'redux';

const moviesReducer = (state = [1,2], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default moviesReducer;
