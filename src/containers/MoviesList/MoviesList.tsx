import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MoviesList.scss";
import MoviesFilter from "../../components/MoviesFilter/MoviesFilter";
import MovieCard from "../../components/MovieCard/MovieCard";

class MoviesList extends Component<any, any> {
  moviesJSON = [];
  public static propTypes = {
    filterMovies: PropTypes.func,
    setActiveMovie: PropTypes.func,
    movies: PropTypes.array,
    moviesReceived: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.state = { moviesFound: null };
  }

  componentDidUpdate() {}

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.moviesReceived) {
      if (nextProps.movies.length > 0) {
        return { moviesFound: true };
      }
      return { moviesFound: false };
    }
    return { moviesFound: null };
  }

  renderMovieList() {
    return (
      <div>
        <div className="movies-list__found">
          <span>{this.props.movies.length}</span> movies found
        </div>
        <div className="movies-list__grid">
          {this.props.movies.map((movie) => (
            <MovieCard
              openModal={this.props.openModal}
              setActiveMovie={this.props.setActiveMovie}
              movie={movie}
              key={movie.id}
            />
          ))}
        </div>
      </div>
    );
  }

  renderNotFound() {
    return <div className="movies-list__notfound">No Movie Found</div>;
  }

  render() {
    return (
      <div className="movies-list">
        <div className="container">
          <MoviesFilter
            genre={this.props.genre}
            sortBy={this.props.sortBy}
            filterMovies={this.props.filterMovies}
          />
          {this.state.moviesFound != null
            ? this.state.moviesFound
              ? this.renderMovieList()
              : this.renderNotFound()
            : ""}
        </div>
      </div>
    );
  }
}

export default MoviesList;
