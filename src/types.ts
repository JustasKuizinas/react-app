export const MOVIE_GENRES = {
  ALL: 'All',
  DOCUMENTARY: 'Documentary',
  COMEDY: 'Comedy',
  HORROR: 'Horror',
  CRIME: 'Crime',
  ACTION: 'Action',
  ADVENTURE: 'Adventure',
  FANTASY: 'Fantasy'
} as const;

export const SORT_BY = {
  DATE: 'Release Date',
  TITLE: 'Title',
} as const;

export const MODAL = {
  MOVIE_ADD: 1,
  MOVIE_EDIT: 2,
  CONFIRM: 3,
  MOVIE_DELETE: 4,
} as const;

export const API_URL = 'http://localhost:4000/';
