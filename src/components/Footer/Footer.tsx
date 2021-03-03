import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

const Footer = (props) => (
  <div className="footer">
      <div className="logo">
        <span>netflix</span>roulette
      </div>
  </div>
);

Footer.propTypes = {
  // bla: PropTypes.string,
};

Footer.defaultProps = {
   // bla: 'test',
}; 
  
export default Footer;
