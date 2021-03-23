import { API_URL } from '../../types';

export default class MovieService {
  static getMovies(limit = 10) {
    return fetch(API_URL + 'movies?limit=' + limit, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(function (res) {
      return res.json().then(res => res.data);
    });
  }
}
