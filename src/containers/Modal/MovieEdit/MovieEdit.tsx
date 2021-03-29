import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import MovieForm from '../../../components/MovieForm/MovieForm';
import './MovieEdit.scss';
import { connect } from 'react-redux';
import { movieEdit } from '../../../redux/movie/movie.actions';

const MovieEditModal: React.FC<any> = props => {
  let movie = props.movie;

  function editMovie() {
    props.movieEditProp(movie);
    props.onModalClose();
  }

  function inputValueChange(property, value) {
    movie[property] = value;
  }

  return (
    <Modal
      title="edit movie"
      submitText="edit"
      cancelText="Reset"
      onModalClose={props.onModalClose}
      onModalCancel={() => {}}
      onModalSubmit={editMovie}
    >
      <MovieForm   onInputValueChange={inputValueChange} movie={props.movie}></MovieForm>
    </Modal>
  );
};

function mapDispatchProps(dispatch) {
  return {
    movieEditProp: movie => dispatch(movieEdit(movie)),
  };
}
export default connect(null, mapDispatchProps)(MovieEditModal);
