import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import MoviesFilter from '../MoviesFilter/MoviesFilter';
import MovieCard from '../../components/MovieCard/MovieCard';
import { connect, shallowEqual, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { API_URL } from '../../types';
import MovieService from '../../services/movie/movie.service';
import { __dc } from '../../helpers';
import { getFilteredMovies } from '../../redux/movie/movie.selectors';
import { movieInit } from '../../redux/movie/movie.actions';

const MoviesList: React.FC<any> = props => {
  const [moviesFound, setMoviesFound] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    MovieService.getAll(1000).then(movies => {
      dispatch(movieInit(movies));
    });
  }, []);

  let genre = useSelector((state: RootState) => state.genre);
  let search = useSelector((state: RootState) => state.search);
  let sort = useSelector((state: RootState) => state.sort);
  let movies = useSelector(getFilteredMovies(genre, search, sort));

  function renderMovieList() {
    return (
      <div>
        <div className="movies-list__found">
          <span>{movies.length}</span> movies found
        </div>
        <div className="movies-list__grid">
          {movies.map(movie => (
            <MovieCard
              openModal={props.openModal}
              setActiveMovie={props.setActiveMovie}
              movie={__dc(movie)}
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
        <MoviesFilter />
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
  setActiveMovie: PropTypes.func,
  movies: PropTypes.array,
  moviesReceived: PropTypes.bool,
};

// MoviesList.whyDidYouRender = true;

export default MoviesList;
