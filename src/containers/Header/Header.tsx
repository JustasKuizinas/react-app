import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { VscSearch } from 'react-icons/vsc';
import Button from '../../components/Button/Button';
import Search from '../../components/Search/Search';
import { MODAL } from '../../types';
import { connect } from 'react-redux';
import { movieFilter } from '../../redux/movie/movie.actions';

const Header: React.FC<any> = props => {
  function closeMovieInfo() {
    props.setActiveMovie(null);
  }

  function addMovie() {
    props.openModal(MODAL.MOVIE_ADD);
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
          <Search onSearch={props.movieFilterProp} />
        </div>
      </div>
    );
  }

  function renderMovieDetails() {
    return (
      <div className="movie-info">
        <div className="container">
          <VscSearch onClick={closeMovieInfo} className="icon-search" />
          <img src={props.activeMovie?.poster_path} alt="" />
          <div className="movie-info__desc">
            <div className="movie-info__title">
              {props.activeMovie?.title}
              <span>{props.activeMovie?.vote_average}</span>
            </div>
            <div className="movie-info__sub">{props.activeMovie?.tagline}</div>
            <div className="movie-info__yt">
              {props.activeMovie?.release_date.slice(0, 4)}
              {props.activeMovie?.runtime && (
                <span>{props.activeMovie?.runtime} min</span>
              )}
            </div>
            <p>{props.activeMovie?.overview}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="header">
      <div className="header__bg"></div>
      {!props.activeMovie && renderSearch()}
      {props.activeMovie && renderMovieDetails()}
    </div>
  );
};

Header.propTypes = {
  movie: PropTypes.object,
};

function mapDispatchProps(dispatch) {
  return {
    movieFilterProp: search => dispatch(movieFilter('', search)),
  };
}

export default connect(null, mapDispatchProps)(Header);
