import React from "react";
import PropTypes from "prop-types";
import "./MovieCard.scss";
import MovieOptions from "../MovieOptions/MovieOptions";

const MovieCard = (props) => {
  let genres = "";
  let genresArr = props.movie.genres;
  if (genresArr.length == 2) {
    genres = genresArr.join(" & ");
  } else if (genresArr.length > 2) {
    genres = genresArr.join(", ");
  }

  function setActiveMovie() {
    props.setActiveMovie(props.movie);
  }

  function editMovie() {
    props.openModal("movieForm", { movie: props.movie });
  }

  function deleteMovie() {
    props.openModal("confirm", {
      title: "delete movie",
      confirmText: "Are you sure you want to delete this movie?",
      confirmFn: () => {},
    });
  }

  return (
    <div className="movie-card" onClick={setActiveMovie}>
      <MovieOptions editMovie={editMovie} deleteMovie={deleteMovie} />
      <img src={props.movie.poster_path} loading="lazy" alt="" />
      <div className="movie-card__desc">
        <div className="movie-card__left">
          <p>{props.movie.title}</p>
          <p>{genres}</p>
        </div>
        <div className="movie-card__year">
          {props.movie.release_date.slice(0, 4)}
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  setActiveMovie: PropTypes.func,
  openModal: PropTypes.func,
  movie: PropTypes.object,
};

export default MovieCard;
