import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import movieReducer from './movie/movie.reducer';
import thunk from 'redux-thunk';
import sortReducer from './sort';
import genreReducer from './genre';
import searchReducer from './search';

let store;
const allReducers = combineReducers({
  movies: movieReducer,
  sort: sortReducer,
  genre: genreReducer,
  search: searchReducer,
}); 
export type RootState = ReturnType<typeof allReducers>;

const composeEnhancer =
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

export default store = createStore(
  allReducers,
  composeEnhancer(applyMiddleware(thunk))
);
