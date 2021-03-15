import React, { Component, useCallback, useEffect, useState } from 'react';
import './style.scss';
import Home from '../../pages/Home/Home';
import { MODAL, MOVIE_GENRES, SORT_BY } from '../../types';
import ConfirmModal from '../Modal/Confirm/Confirm';
import MovieAddModal from '../Modal/MovieAdd/MovieAdd';
import MovieEditModal from '../Modal/MovieEdit/MovieEdit';
let moviesJSON = [];

const App = props => {
  let [modalData, setModalData] = useState<{ [key: string]: any }>({});
  let [activeModalType, setActiveModalType] = useState(null);

  let [movies, setMovies] = useState([]);
  let [genre, setGenre] = useState(MOVIE_GENRES.ALL);
  let [sortBy, setSortBy] = useState(SORT_BY.DATE);
  let [moviesReceived, setMoviesReceived] = useState(false);
  let [activeMovie, setActiveMovie] = useState(null);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/VarvaraZadnepriak/MoviesAPI.ReactJS/master/src/data/movies.json'
    )
      .then(resp => resp.json())
      .then(movies => {
        moviesJSON = movies;
        filterMovies(MOVIE_GENRES.ALL, SORT_BY.DATE);
        setMoviesReceived(true);
      });
  }, []);

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

  function renderModals() {
    if (!activeModalType) return;
    let modal;
    if (activeModalType == MODAL.MOVIE_ADD) {
      modal = <MovieAddModal onModalClose={closeModal} {...modalData} />;
    }
    if (activeModalType == MODAL.MOVIE_EDIT) {
      modal = <MovieEditModal onModalClose={closeModal} {...modalData} />;
    }
    if (activeModalType == MODAL.CONFIRM) {
      modal = <ConfirmModal onModalClose={closeModal} {...modalData} />;
    }

    return modal;
  }

  const filterMovies = useCallback((genreFilter, sortByFilter, search = '') => {
    if (genreFilter) {
      setGenre(genreFilter);
    } else {
      genreFilter = genre;
    }
    if (sortByFilter) {
      setSortBy(sortByFilter);
    } else {
      sortByFilter = sortBy;
    }

    let movies = [...moviesJSON];

    if (genreFilter != MOVIE_GENRES.ALL) {
      movies = movies.filter(movie => {
        return movie.genres.includes(genreFilter);
      });
    }
    if (search) {
      movies = movies.filter(movie => {
        return movie.title.toLowerCase().indexOf(search.toLowerCase()) >= 0;
      });
    }

    if (sortByFilter == SORT_BY.DATE) {
      movies.sort((a, b) => {
        return +new Date(b.release_date) - +new Date(a.release_date);
      });
    } else if (sortByFilter == SORT_BY.TITLE) {
      movies.sort((a, b) => {
        return b.title > a.title ? -1 : 1;
      });
    }

    setMovies(movies);
  }, []);

  const selectActiveMovie = useCallback(activeMovie => {
    setActiveMovie(activeMovie);
    window.scrollTo(0, 0);
  }, []);

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
        <Home
          sortby={sortBy}
          genre={genre}
          moviesReceived={moviesReceived}
          movies={movies}
          activeMovie={activeMovie}
          filterMovies={filterMovies}
          selectActiveMovie={selectActiveMovie}
          openModal={openModal}
        />
      </div>

      {renderModals()}
    </>
  );
};

App.propTypes = {};

export default App;
