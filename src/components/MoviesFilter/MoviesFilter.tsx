import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './MoviesFilter.scss';
import { IoMdArrowDropdown } from 'react-icons/io';

class MoviesFilter extends Component<any, any> {
  options = [{
    text: 'RELEASE Date',
    value: 'Date'
  }, {
    text: 'Title',
    value: 'Title'
  }]

  buttons = [{
    text: 'All'
  },
  {
    text: 'Documentary'
  },
  {
    text: 'Comedy'
  },
  {
    text: 'Horror'
  },
  {
    text: 'Crime'
  }];

  public static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      genre: 'All',
      sortBy: 'Date'
    }

    this.selectGenre = this.selectGenre.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }

  selectGenre(genre) {
    this.setState({ genre: genre });
    this.props.filterMovies(genre, this.state.sortBy);
  }

  sortBy(e) {
    this.setState({ sortBy: e.target.value });
    this.props.filterMovies(this.state.genre, e.target.value);
  }

  render() {
    return (
      <div className="movies-filter">
        <div className="movies-filter__border"></div>
        <div className="movies-filter_cats">
          {this.buttons.map(button => (
            <button onClick={() => this.selectGenre(button.text)} className={button.text == this.state.genre ? 'is-active' : ''}>{button.text}</button>
          ))}
        </div>
        <div className="movies-filter__sort">
          <label htmlFor="sort-by">sort by</label>
          <div className="select">
            <select name="" id="sort-by" onChange={this.sortBy}>
              {this.options.map(option => (
                <option value={option.value}>{option.text}</option>
              ))}
            </select>
            <IoMdArrowDropdown className="select__arr" />
          </div>
        </div>
      </div>
    )
  }
}


MoviesFilter.propTypes = {
  filterMovies: PropTypes.func
};



export default MoviesFilter;
