import { combineReducers } from 'redux';
import moviesReducer from './movies';

const allReducers = combineReducers({
  movies: moviesReducer,
});
export type RootState = ReturnType<typeof allReducers>;
export default allReducers;
