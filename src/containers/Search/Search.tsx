import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Search.scss';

class Search extends Component<any, any> {
  public static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.doSearch = this.doSearch.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  onInputChange(e) {
    this.setState({ search: e.target.value });
  }

  doSearch() {
    this.props.filterMovies(null, null, this.state.search);
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.doSearch();
    }
  }


  render() {
    return (
      <div className="search">
        <input className="inpt -secondary"
          type="text"
          placeholder="What do you want to watch?"
          onChange={this.onInputChange}
          onKeyDown={this.handleKeyDown}
        />
        <button className="btn -primary" onClick={this.doSearch}>search</button>
      </div>
    )
  }
}

Search.propTypes = {
  filterMovies: PropTypes.func,
};

export default Search;
