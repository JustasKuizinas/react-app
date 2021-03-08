import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MovieOptions.scss";

class MovieOptions extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      menuActive: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(e) {
    this.setState({ menuActive: !this.state.menuActive });
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  renderCircle() {
    return (
      <div onClick={this.toggleMenu} className="movie-options__circle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }

  deleteMovie() {}

  renderMenu() {
    return (
      <div className="movie-options__menu">
        <a onClick={this.toggleMenu}>x</a>
        <button onClick={this.props.editMovie}>Edit</button>
        <button onClick={this.props.deleteMovie}>Delete</button>
      </div>
    );
  }

  render() {
    return (
      <div className="movie-options" onClick={this.stopPropagation}>
        {!this.state.menuActive && this.renderCircle()}
        {this.state.menuActive && this.renderMenu()}
      </div>
    );
  }
}

MovieOptions["propTypes"] = {
  // bla: PropTypes.string,
};

MovieOptions["defaultProps"] = {
  // bla: 'test',
};

export default MovieOptions;
