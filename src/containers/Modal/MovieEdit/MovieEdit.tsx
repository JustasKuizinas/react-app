import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import MovieForm from '../../../components/MovieForm/MovieForm';
import './MovieEdit.scss';

const MovieEditModal: React.FC<any> = props => {
  return (
    <Modal
      title="edit movie"
      submitText="edit"
      cancelText="Reset"
      onModalClose={props.onModalClose}
      onModalCancel={() => {}}
      onModalSubmit={() => {}}
    >
      <MovieForm movie={props.movie}></MovieForm>
    </Modal>
  );
};

export default MovieEditModal;
