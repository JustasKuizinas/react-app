import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MovieForm.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import MultiSelect from "react-multi-select-component";

class MovieForm extends Component<any, any> {
  static propTypes = {
    // bla: PropTypes.string,
  };

  static defaultProps = {
    // bla: 'test',
  };

  genres = ["Documentary", "Comedy", "Horror", "Crime"];

  constructor(props) {
    super(props);

    this.state = {
      movieOptions: [],
      selectedGenres: [],
    };

    this.onGenreSelect = this.onGenreSelect.bind(this);
  }

  componentDidMount() {
    let allGenres = [...this.genres];
    let selectedGenres = [];
    if (this.props.movie) {
      allGenres = Array.from(
        new Set([...this.genres, ...this.props.movie.genres])
      );
      selectedGenres = this.props.movie.genres.map((genre) => ({
        label: genre,
        value: genre,
      }));
    }

    let movieOptions = allGenres.map((genre) => ({
      label: genre,
      value: genre,
    }));

    this.setState({ selectedGenres, movieOptions });
  }

  onGenreSelect(values) {
    this.setState({ selectedGenres: values });
  }

  render() {
    return (
      <div className="movie-form">
        <form action="">
          <div className="movie-form__field">
            <label>Title</label>
            <Input
              value={this.props.movie?.title}
              style="-primary"
              placeholder="Title here"
            ></Input>
          </div>
          <div className="movie-form__field">
            <label>release date</label>
            <Input
              value={this.props.movie?.release_date}
              style="-primary"
              type="date"
              placeholder="Select date"
            ></Input>
          </div>
          <div className="movie-form__field">
            <label>poster url</label>
            <Input
              value={this.props.movie?.poster_path}
              style="-primary"
              placeholder="Poster URL here"
            ></Input>
          </div>
          <div className="movie-form__field">
            <label>genre</label>
            <MultiSelect
              hasSelectAll={false}
              disableSearch={true}
              options={this.state.movieOptions}
              value={this.state.selectedGenres}
              onChange={this.onGenreSelect}
              labelledBy={"Select"}
            />
          </div>
          <div className="movie-form__field">
            <label>overview</label>
            <Input
              value={this.props.movie?.overview}
              style="-primary"
              placeholder="Overview here"
            ></Input>
          </div>
          <div className="movie-form__field">
            <label>runtime</label>
            <Input
              value={this.props.movie?.runtime ? this.props.movie.runtime : ""}
              style="-primary"
              placeholder="Runtime here"
            ></Input>
          </div>
          <div className="movie-form__btns">
            <Button style="-outline">reset</Button>
            <Button style="-trenary">
              {this.props.movie ? "save" : "submit"}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default MovieForm;
