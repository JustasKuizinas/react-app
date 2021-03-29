import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/Header/Header';
import MoviesList from '../../containers/MoviesList/MoviesList';
import Footer from '../../components/Footer/Footer';
import './Home.scss';
import ErrorBoundary from '../../containers/ErrorBoundary/ErrorBoundary';

const Home: React.FC<any> = props => {
 

  return (
    <>
      <ErrorBoundary>
        <Header
          openModal={props.openModal}
          setActiveMovie={props.selectActiveMovie}
          activeMovie={props.activeMovie}
        
        />
        <MoviesList
          openModal={props.openModal}
          setActiveMovie={props.selectActiveMovie}
        />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default Home;
