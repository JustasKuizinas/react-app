import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MovieForm.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import MultiSelect from 'react-multi-select-component';
import { MOVIE_GENRES } from '../../types';
import { useEffect } from 'react';
import { useState } from 'react';

const MovieForm: React.FC<any> = props => {
  let [selectedGenres, setGenres] = useState([]);
  let allGenres = [...Object.values(MOVIE_GENRES)];
  allGenres.shift();
  let movieOptions = [];

  movieOptions = allGenres.map(genre => ({
    label: genre,
    value: genre,
  }));

  useEffect(() => {
    if (props.movie) {
      let movieGenres = [];
      movieGenres = props.movie.genres
        .filter(genre => {
          if (allGenres.includes(genre)) return true;
        })
        .map(genre => ({
          label: genre,
          value: genre,
        }));
      setGenres(movieGenres);
    }
  }, []);


  return (
    <div className="movie-form">
      <form action="">
        <div className="movie-form__field">
          <label>Title</label>
          <Input
            value={props.movie?.title}
            style="-primary"
            placeholder="Title here"
          ></Input>
        </div>
        <div className="movie-form__field">
          <label>release date</label>
          <Input
            value={props.movie?.release_date}
            style="-primary"
            type="date"
            placeholder="Select date"
          ></Input>
        </div>
        <div className="movie-form__field">
          <label>poster url</label>
          <Input
            value={props.movie?.poster_path}
            style="-primary"
            placeholder="Poster URL here"
          ></Input>
        </div>
        <div className="movie-form__field">
          <label>genre</label>
          <MultiSelect
            hasSelectAll={false}
            disableSearch={true}
            options={movieOptions}
            value={selectedGenres}
            onChange={setGenres}
            labelledBy={'Select'}
          />
        </div>
        <div className="movie-form__field">
          <label>overview</label>
          <Input
            value={props.movie?.overview}
            style="-primary"
            placeholder="Overview here"
          ></Input>
        </div>
        <div className="movie-form__field">
          <label>runtime</label>
          <Input
            value={props.movie?.runtime ? props.movie.runtime : ''}
            style="-primary"
            placeholder="Runtime here"
          ></Input>
        </div>
      </form>
    </div>
  );
};

MovieForm.propTypes = {};

export default MovieForm;
