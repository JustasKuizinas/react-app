import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MoviesFilter.scss";
import { IoMdArrowDropdown } from "react-icons/io";
import Select from "../Select/Select";

class MoviesFilter extends Component<any, any> {
  options = [
    {
      text: "RELEASE Date",
      value: "Date",
    },
    {
      text: "Title",
      value: "Title",
    },
  ];

  buttons = [
    {
      text: "All",
    },
    {
      text: "Documentary",
    },
    {
      text: "Comedy",
    },
    {
      text: "Horror",
    },
    {
      text: "Crime",
    },
  ];

  public static propTypes = {};

  constructor(props) {
    super(props);


    this.selectGenre = this.selectGenre.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }

  selectGenre(genre) {
    this.setState({ genre: genre });
    this.props.filterMovies(genre, this.props.sortBy);
  }

  sortBy(e) {
    this.props.filterMovies(this.props.genre, e.target.value);
  }

  render() {
    return (
      <div className="movies-filter">
        <div className="movies-filter__border"></div>
        <div className="movies-filter_cats">
          {this.buttons.map((button) => (
            <button
              onClick={() => this.selectGenre(button.text)}
              className={button.text == this.props.genre ? "is-active" : ""}
              key={button.text}
            >
              {button.text}
            </button>
          ))}
        </div>
        <div className="movies-filter__sort">
          <label>sort by</label>
          <Select onChange={this.sortBy} options={this.options}></Select>
        </div>
      </div>
    );
  }
}

MoviesFilter.propTypes = {
  filterMovies: PropTypes.func,
};

export default MoviesFilter;
