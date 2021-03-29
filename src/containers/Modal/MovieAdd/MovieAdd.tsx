import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import MovieForm from '../../../components/MovieForm/MovieForm';
import './MovieAdd.scss';
import { connect } from 'react-redux';
import { movieAdd } from '../../../redux/movie/movie.actions';

const MovieAddModal: React.FC<any> = props => {
  let movie = {
    overview: '',
    poster_path: '',
    release_date: '',
    runtime: '',
    title: '',
    genres: [],
  };

  function addMovie() {
    props.movieAddProp(movie);
    props.onModalClose();
  }

  function inputValueChange(property, value) {
    movie[property] = value;
  }

  function onModalCancel() {}

  return (
    <Modal
      title="Add Movie"
      submitText="Submit"
      cancelText="Reset"
      onModalClose={props.onModalClose}
      onModalCancel={onModalCancel}
      onModalSubmit={addMovie}
    >
      <MovieForm onInputValueChange={inputValueChange}></MovieForm>
    </Modal>
  );
};

function mapDispatchProps(dispatch) {
  return {
    movieAddProp: movie => {
      movie.runtime = +movie.runtime;
      dispatch(movieAdd(movie));
    },
  };
}
export default connect(null, mapDispatchProps)(MovieAddModal);
