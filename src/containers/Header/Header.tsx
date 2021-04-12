import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { VscSearch } from 'react-icons/vsc';
import Button from '../../components/Button/Button';
import Search from '../../components/Search/Search';
import { MODAL } from '../../types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { movieFilter } from '../../redux/movie/movie.actions';
import { setSearch } from '../../redux/search';
import { useParams } from 'react-router';
import { getMovie } from '../../redux/movie/movie.selectors';
import { useHistory } from 'react-router-dom';

const Header: React.FC<any> = props => {
  const dispatch = useDispatch();
  const params: any = useParams();
  const history = useHistory();
  let activeMovie = null;
  activeMovie = useSelector(getMovie(params.filmID));
  let searchQuery = params.searchQuery;

  useEffect(() => {
    if (activeMovie) {
      window.scrollTo(0, 0);
    }
  }, [activeMovie]);

  useEffect(() => {
    if (searchQuery) {
      dispatch(setSearch(searchQuery));
    }
  }, [searchQuery]);

  function closeMovieInfo() {
    dispatch(setSearch(''));
    history.push('/');
  }

  function addMovie() {
    props.openModal(MODAL.MOVIE_ADD);
  }

  function doSearch(value) {
    history.push('/search/' + value);
    dispatch(setSearch(value));
  }

  function renderSearch() {
    return (
      <div className="header__search">
        <div className="container">
          <div className="header__add">
            <Button onClick={addMovie} style="-secondary">
              + ADD MOVIE
            </Button>
          </div>

          <h1>Find your movie</h1>
          <Search value={searchQuery} onSearch={doSearch} />
        </div>
      </div>
    );
  }

  function renderMovieDetails() {
    return (
      <div className="movie-info">
        <div className="container">
          <VscSearch onClick={closeMovieInfo} className="icon-search" />
          <img src={activeMovie?.poster_path} alt="" />
          <div className="movie-info__desc">
            <div className="movie-info__title">
              {activeMovie?.title}
              <span>{activeMovie?.vote_average}</span>
            </div>
            <div className="movie-info__sub">{activeMovie?.tagline}</div>
            <div className="movie-info__yt">
              {activeMovie?.release_date.slice(0, 4)}
              {activeMovie?.runtime && <span>{activeMovie?.runtime} min</span>}
            </div>
            <p>{activeMovie?.overview}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="header">
      <div className="header__bg"></div>
      {!activeMovie && renderSearch()}
      {activeMovie && renderMovieDetails()}
    </div>
  );
};

Header.propTypes = {
  movie: PropTypes.object,
};

export default Header;
