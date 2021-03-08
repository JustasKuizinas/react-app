import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../../containers/Header/Header";
import MoviesList from "../../containers/MoviesList/MoviesList";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";
import ErrorBoundary from "../../containers/ErrorBoundary/ErrorBoundary";

class Home extends Component<any, any> {
  moviesJSON = [];

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      genre: "All",
      sortBy: "Date",
      moviesReceived: false,
      activeMovie: null,
    };

    this.filterMovies = this.filterMovies.bind(this);
    this.setActiveMovie = this.setActiveMovie.bind(this);
  }

  componentDidMount = () => {
    fetch(
      "https://raw.githubusercontent.com/VarvaraZadnepriak/MoviesAPI.ReactJS/master/src/data/movies.json"
    )
      .then((resp) => resp.json())
      .then((movies) => {
        this.moviesJSON = movies;
        this.filterMovies("All", "Date");
        this.setState({ moviesReceived: true });
      });
  };

  filterMovies(genre, sortBy, search = "") {
    if (genre) {
      this.setState({ genre });
    } else {
      genre = this.state.genre;
    }
    if (sortBy) {
      this.setState({ sortBy });
    } else {
      sortBy = this.state.sortBy;
    }

    let movies = [...this.moviesJSON];

    if (genre != "All") {
      movies = movies.filter((movie) => {
        return movie.genres.includes(genre);
      });
    }

    if (search) {
      movies = movies.filter((movie) => {
        return movie.title.toLowerCase().indexOf(search.toLowerCase()) >= 0;
      });
    }

    if (sortBy == "Date") {
      movies.sort((a, b) => {
        return +new Date(b.release_date) - +new Date(a.release_date);
      });
    } else if (sortBy == "Title") {
      movies.sort((a, b) => {
        return b.title > a.title ? -1 : 1;
      });
    }

    this.setState({ movies });
  }

  setActiveMovie(activeMovie) {
    this.setState({ activeMovie });
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <ErrorBoundary>
          <Header
            openModal={this.props.openModal}
            setActiveMovie={this.setActiveMovie}
            movie={this.state.activeMovie}
            filterMovies={this.filterMovies}
          />
          <MoviesList
            openModal={this.props.openModal}
            sortBy={this.state.sortBy}
            genre={this.state.genre}
            moviesReceived={this.state.moviesReceived}
            filterMovies={this.filterMovies}
            movies={this.state.movies}
            setActiveMovie={this.setActiveMovie}
          />
        </ErrorBoundary>
        <Footer />
      </>
    );
  }
}

export default Home;
