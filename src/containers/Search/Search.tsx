import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Search.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

class Search extends Component<any, any> {
  public static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };

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
    if (e.key === "Enter") {
      this.doSearch();
    }
  }

  render() {
    return (
      <div className="search">
        <Input
          style="-secondary"
          type="text"
          placeholder="What do you want to watch?"
          onChange={this.onInputChange}
          onKeyDown={this.handleKeyDown}
        />
        <Button style="-primary" onClick={this.doSearch}>
          search
        </Button>
      </div>
    );
  }
}

Search.propTypes = {
  filterMovies: PropTypes.func,
};

export default Search;
