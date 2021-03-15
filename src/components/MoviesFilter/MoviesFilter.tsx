import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MoviesFilter.scss';
import Select from '../Select/Select';
import { MOVIE_GENRES, SORT_BY } from '../../types';

const MoviesFilter: React.FC<any> = props => {
  let buttons = [
    ...Object.values(MOVIE_GENRES).map(genre => ({
      label: genre,
    })),
  ];

  let options = [
    ...Object.values(SORT_BY).map(genre => ({
      label: genre,
      value: genre,
    })),
  ];

  function selectGenre(genre) {
    props.filterMovies(genre, props.sortBy);
  }

  function sortBy(e) {
    props.filterMovies(props.genre, e.target.value);
  }

  return (
    <div className="movies-filter">
      <div className="movies-filter__border"></div>
      <div className="movies-filter_cats">
        {buttons.map(button => (
          <button
            onClick={() => selectGenre(button.label)}
            className={button.label == props.genre ? 'is-active' : ''}
            key={button.label}
          >
            {button.label}
          </button>
        ))}
      </div>
      <div className="movies-filter__sort">
        <label>sort by</label>
        <Select onChange={sortBy} options={options}></Select>
      </div>
    </div>
  );
};

MoviesFilter.propTypes = {
  filterMovies: PropTypes.func,
};

export default MoviesFilter;
