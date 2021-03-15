import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import MovieForm from '../../../components/MovieForm/MovieForm';
import './MovieAdd.scss';

const MovieAddModal: React.FC<any> = props => {
  return (
    <Modal
      title="Add Movie"
      submitText="Submit"
      cancelText="Reset"
      onModalClose={props.onModalClose}
      onModalCancel={() => {}}
      onModalSubmit={() => {}}
    >
      <MovieForm></MovieForm>
    </Modal>
  );
};

export default MovieAddModal;
