import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MovieOptions.scss';

class MovieOptions extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      menuActive: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }



  toggleMenu(e) {
    this.setState({ menuActive: !this.state.menuActive })
  }

  stopPropagation(e){
    e.stopPropagation();
  }

  render() {

    return (
      <div className="movie-options" onClick={this.stopPropagation}>
        {!this.state.menuActive && (
          <div onClick={this.toggleMenu} className="movie-options__circle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        {this.state.menuActive && (
          <div className="movie-options__menu">
            <a onClick={this.toggleMenu}>x</a>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        )}
      </div>
    );
  }
}

MovieOptions['propTypes'] = {
  // bla: PropTypes.string,
};

MovieOptions['defaultProps'] = {
  // bla: 'test',
};

export default MovieOptions;
