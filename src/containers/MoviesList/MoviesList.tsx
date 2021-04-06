import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import MoviesFilter from '../../components/MoviesFilter/MoviesFilter';
import MovieCard from '../../components/MovieCard/MovieCard';
import { connect, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { API_URL } from '../../types';
import { movieAdd, movieInit } from '../../redux/movie/movie.actions';
import MovieService from '../../services/movie/movie.service';
import { __dc } from '../../helpers';

const MoviesList: React.FC<any> = props => {
  const [moviesFound, setMoviesFound] = useState(true);

  useEffect(() => {
    MovieService.getAll(1000).then(movies => {
      props.movieInitProp(movies);
    });
  }, []);

  function renderMovieList() {
    return (
      <div>
        <div className="movies-list__found">
          <span>{props.moviesPprop.filter(movie => movie.active).length}</span>{' '}
          movies found
        </div>
        <div className="movies-list__grid">
          {props.moviesPprop.map(movie => {
            if (movie.active) {
              return (
                <MovieCard
                  openModal={props.openModal}
                  setActiveMovie={props.setActiveMovie}
                  movie={__dc(movie)}
                  key={movie.id}
                />
              );
            }
          })}
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

function mapStateProps(state) {
  return {
    moviesPprop: state.movies,
  };
}

function mapDispatchProps(dispatch) {
  return {
    movieInitProp: movies => dispatch(movieInit(movies)),
  };
}

export default connect(mapStateProps, mapDispatchProps)(MoviesList);
