import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import MoviesFilter from '../../components/MoviesFilter/MoviesFilter';
import MovieCard from '../../components/MovieCard/MovieCard';

class MoviesList extends Component<any, any> {
  moviesJSON = [];
  public static propTypes = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movies-list">
        <div className="container">
          <MoviesFilter filterMovies={this.props.filterMovies} />
          {this.props.moviesReceived && this.props.movies.length > 0 && (
            <div>
              <div className="movies-list__found">
                <span>{this.props.movies.length}</span> movies found
              </div>
              <div className="movies-list__grid">
                {this.props.movies.map(movie => (
                  <MovieCard setActiveMovie={this.props.setActiveMovie} movie={movie} key={movie.id} />
                ))}
              </div>
            </div>
          )}
          {this.props.moviesReceived && this.props.movies.length == 0 && (
            <div className="movies-list__notfound">No Movie Found</div>
          )}
        </div>
      </div>
    );
  }
}

MoviesList.propTypes = {
  filterMovies: PropTypes.func,
  setActiveMovie: PropTypes.func,
  movies: PropTypes.array,
  moviesReceived: PropTypes.bool
};



export default MoviesList;
