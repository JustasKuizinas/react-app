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
        console.log(props.movie, movieGenres)
      setGenres(movieGenres);
    }
  }, []);

  function multiSelectChange(genres) {
    let genresArr = genres.map(genre => genre.value);
    props.onInputValueChange('genres', genresArr);
    setGenres(genres);
  }

  return (
    <div className="movie-form">
      <form action="">
        <div className="movie-form__field">
          <label>Title</label>
          <Input
            value={props.movie?.title}
            style="-primary"
            placeholder="Title here"
            onChange={props.onInputValueChange.bind(null, 'title')}
          ></Input>
        </div>
        <div className="movie-form__field">
          <label>release date</label>
          <Input
            value={props.movie?.release_date}
            style="-primary"
            type="date"
            placeholder="Select date"
            onChange={props.onInputValueChange.bind(null, 'release_date')}
          ></Input>
        </div>
        <div className="movie-form__field">
          <label>poster url</label>
          <Input
            value={props.movie?.poster_path}
            style="-primary"
            placeholder="Poster URL here"
            onChange={props.onInputValueChange.bind(null, 'poster_path')}
          ></Input>
        </div>
        <div className="movie-form__field">
          <label>genre</label>
          <MultiSelect
            hasSelectAll={false}
            disableSearch={true}
            options={movieOptions}
            value={selectedGenres}
            onChange={multiSelectChange}
            labelledBy={'Select'}
          />
        </div>
        <div className="movie-form__field">
          <label>overview</label>
          <Input
            value={props.movie?.overview}
            style="-primary"
            placeholder="Overview here"
            onChange={props.onInputValueChange.bind(null, 'overview')}
          ></Input>
        </div>
        <div className="movie-form__field">
          <label>runtime</label>
          <Input
            value={props.movie?.runtime ? props.movie.runtime : ''}
            style="-primary"
            placeholder="Runtime here"
            onChange={props.onInputValueChange.bind(null, 'runtime')}
          ></Input>
        </div>
      </form>
    </div>
  );
};

MovieForm.propTypes = {};
MovieForm.defaultProps = {
  onInputValueChange:function(){}
};

export default MovieForm;
