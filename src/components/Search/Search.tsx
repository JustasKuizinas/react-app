import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import './Search.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Search: React.FC<any> = props => {
  const [searchValue, setSearchValue] = useState('');

  function onChange(value) {
    setSearchValue(value);
  }

  function doSearch() {
    console.log(searchValue)
    props.onSearch(searchValue);
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

Search.propTypes = {};

export default Search;
