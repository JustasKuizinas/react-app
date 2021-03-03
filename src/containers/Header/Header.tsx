import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import Search from '../Search/Search';
import { VscSearch } from 'react-icons/vsc';


class Header extends Component<any, any> {
  public static propTypes = {};

  constructor(props) {
    super(props);

    this.closeMovieInfo = this.closeMovieInfo.bind(this);
  }


  closeMovieInfo() {
    this.props.setActiveMovie(null);
  }

  render() {
    return (

      <div className="header">

        <div className="header__bg"></div>
        {!this.props.movie && (
          <div className="header__search">
            <div className="container">
              <button className="header__add btn -secondary">+ ADD MOVIE</button>
              <h1>Find your movie</h1>
              <Search filterMovies={this.props.filterMovies} />
            </div>
          </div>
        )}

        {this.props.movie && (
          <div className="movie-info">
            <div className="container">
              <VscSearch onClick={this.closeMovieInfo} className="icon-search" />
              <img src={this.props.movie?.poster_path} alt="" />
              <div className="movie-info__desc">
                <div className="movie-info__title">
                  {this.props.movie?.title}<span>{this.props.movie?.vote_average}</span>
                </div>
                <div className="movie-info__sub">{this.props.movie?.tagline}</div>
                <div className="movie-info__yt">
                  {this.props.movie?.release_date.slice(0, 4)}
                  <span>{this.props.movie?.runtime} min</span>
                </div>
                <p>
                  {this.props.movie?.overview}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Header.propTypes = {
  movie: PropTypes.object,
  filterMovies: PropTypes.func
};


export default Header;
