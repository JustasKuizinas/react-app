import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import './MoviesFilter.scss';
import Select from '../Select/Select';
import { MOVIE_GENRES, SORT_BY } from '../../types';
import { connect } from 'react-redux';
import { movieFilter, movieSort } from '../../redux/movie/movie.actions';

const MoviesFilter: React.FC<any> = props => {
  const [activeGenre, setActiveGenre] = useState('All');

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
    setActiveGenre(genre);
    props.movieFilterProp(genre);
  }

  function sortBy(e) {
    props.movieSortProp(e.target.value);
  }

  return (
    <div className="movies-filter">
      <div className="movies-filter__border"></div>
      <div className="movies-filter_cats">
        {buttons.map(button => (
          <button
            onClick={() => selectGenre(button.label)}
            className={button.label == activeGenre ? 'is-active' : ''}
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
};

function mapDispatchProps(dispatch) {
  return {
    movieFilterProp: genre => dispatch(movieFilter(genre)),
    movieSortProp: sortBy => dispatch(movieSort(sortBy)),
  };
}

export default connect(null, mapDispatchProps)(MoviesFilter);
