import { RootState } from '..';
import { MOVIE_GENRES, SORT_BY } from '../../types';

export const getFilteredMovies = (genre, search, sort) => (
  state: RootState
) => {
  let movies = state.movies.filter(movie => {
    if (genre === MOVIE_GENRES.ALL) {
      return true;
    }
    if (movie.genres.includes(genre)) {
      return true;
    }
    return false;
  });

  if (search) {
    movies = movies.filter(movie => {
      if (movie.title.toLowerCase().indexOf(search.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  if (sort) {
    if (sort == SORT_BY.DATE) {
      movies.sort((a, b) => {
        return +new Date(b.release_date) - +new Date(a.release_date);
      });
    } else if (sort == SORT_BY.TITLE) {
      movies.sort((a, b) => {
        return b.title > a.title ? -1 : 1;
      });
    }
  }

  return movies;
};
