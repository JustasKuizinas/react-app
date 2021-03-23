import { API_URL } from '../../types';
import { MOVIE_ADD, MOVIE_DELETE, MOVIE_EDIT, MOVIE_FILTER, MOVIE_INIT, MOVIE_SORT } from './movie.types';

export const movieAdd = movie => dispatch => {
  // fetch(API_URL + 'movies', {
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   method: 'POST',
  //   body: JSON.stringify(movie),
  // }).then(function (res) {
    dispatch({
      type: MOVIE_ADD,
      payload: movie,
    });
  // });
};

export const movieInit = movies => ({
  type: MOVIE_INIT,
  payload: movies,
});

export const movieEdit = movie => ({
  type: MOVIE_EDIT,
  payload: movie,
});

export const movieDelete = id => ({
  type: MOVIE_DELETE,
  payload: id,
});

export const movieFilter = (genre,search = '') => ({
  type: MOVIE_FILTER,
  payload: {genre, search}
});

export const movieSort = sortBy => ({
  type: MOVIE_SORT,
  payload: sortBy,
});

