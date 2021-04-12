import React, { Component, useCallback, useEffect, useState } from 'react';
import './style.scss';
import Home from '../../pages/Home/Home';
import { MODAL, MOVIE_GENRES, SORT_BY } from '../../types';
import ConfirmModal from '../Modal/Confirm/Confirm';
import MovieAddModal from '../Modal/MovieAdd/MovieAdd';
import MovieEditModal from '../Modal/MovieEdit/MovieEdit';
import { connect } from 'react-redux';
import { movieDelete } from '../../redux/movie/movie.actions';
import { Switch, Route, Router, BrowserRouter } from 'react-router-dom';
import NotFound from '../../pages/NotFound/NotFound';

let moviesJSON = [];

const App = props => {
  let [modalData, setModalData] = useState<{ [key: string]: any }>({});
  let [activeModalType, setActiveModalType] = useState(null);
  let [activeMovie, setActiveMovie] = useState(null);

  const openModal = useCallback((activeModalType = null, modalData = {}) => {
    document.querySelector('body').classList.add('modal-open');
    setModalData(modalData);
    setActiveModalType(activeModalType);
  }, []);

  const closeModal = useCallback(() => {
    document.querySelector('body').classList.remove('modal-open');
    setModalData({});
    setActiveModalType(null);
  }, []);

  function deleteMovie(id) {
    props.movieDeleteProp(id);
    closeModal();
  }

  function renderModals() {
    if (!activeModalType) return;
    let modal;
    if (activeModalType == MODAL.MOVIE_ADD) {
      modal = <MovieAddModal onModalClose={closeModal} {...modalData} />;
    }
    if (activeModalType == MODAL.MOVIE_EDIT) {
      modal = <MovieEditModal onModalClose={closeModal} {...modalData} />;
    }
    if (activeModalType == MODAL.MOVIE_DELETE) {
      modal = (
        <ConfirmModal
          onModalSubmit={deleteMovie.bind(null, modalData.id)}
          onModalClose={closeModal}
          {...modalData}
        />
      );
    }

    return modal;
  }

  return (
    <>
      <div className="main-logo">
        <div className="container">
          <div className="logo">
            <span>netflix</span>roulette
          </div>
        </div>
      </div>

      <div className="page-wrapper">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home openModal={openModal} />
            </Route>
            <Route exact path="/film/:filmID">
              <Home openModal={openModal} />
            </Route>
            <Route path="/search/:searchQuery">
              <Home exact openModal={openModal} />
            </Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </div>

      {renderModals()}
    </>
  );
};

App.propTypes = {};

function mapDispatchProps(dispatch) {
  return {
    movieDeleteProp: id => dispatch(movieDelete(id)),
  };
}
export default connect(null, mapDispatchProps)(App);
