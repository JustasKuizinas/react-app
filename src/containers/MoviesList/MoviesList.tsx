import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import MoviesFilter from '../../components/MoviesFilter/MoviesFilter';
import MovieCard from '../../components/MovieCard/MovieCard';

const MoviesList: React.FC<any> = props => {
  const [moviesFound, setMoviesFound] = useState(null);

  useEffect(() => {
    if (props.moviesReceived) {
      if (props.movies.length > 0) {
        setMoviesFound(true);
      } else {
        setMoviesFound(false);
      }
    }
  }, [props.moviesReceived, props.movies]);

  function renderMovieList() {
    return (
      <div>
        <div className="movies-list__found">
          <span>{props.movies.length}</span> movies found
        </div>
        <div className="movies-list__grid">
          {props.movies.map(movie => (
            <MovieCard
              openModal={props.openModal}
              setActiveMovie={props.setActiveMovie}
              movie={movie}
              key={movie.id}
            />
          ))}
        </div>
      </div>
    );
  }

  function renderNotFound() {
    return <div className="movies-list__notfound">No Movie Found</div>;
  }

  return (
    <div className="movies-list">
      <div className="container">
        <MoviesFilter
          genre={props.genre}
          sortBy={props.sortBy}
          filterMovies={props.filterMovies}
        />
        {moviesFound != null
          ? moviesFound
            ? renderMovieList()
            : renderNotFound()
          : ''}
      </div>
    </div>
  );
};

MoviesList.propTypes = {
  filterMovies: PropTypes.func,
  setActiveMovie: PropTypes.func,
  movies: PropTypes.array,
  moviesReceived: PropTypes.bool,
};

MoviesList.whyDidYouRender = true
  
export default MoviesList;
