import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import './Search.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Search = props => {
  const [searchValue, setSearchValue] = useState('');

  function onChange(e) {
    setSearchValue(e.target.value);
  }

  function doSearch() {
    props.filterMovies(null, null, searchValue);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      doSearch();
    }
  }

  return (
    <div className="search">
      <Input
        value={searchValue}
        style="-secondary"
        type="text"
        placeholder="What do you want to watch?"
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <Button style="-primary" onClick={doSearch}>
        search
      </Button>
    </div>
  );
};

Search.propTypes = {
  filterMovies: PropTypes.func,
};

export default Search;
