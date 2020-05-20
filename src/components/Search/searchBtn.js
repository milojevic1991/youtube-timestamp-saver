import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { searchItems, closeSearch } from '../../store/actions/action';

import {
  ButtonSection,
  ButtonWrapp,
  SearchIcon,
  SearchIconClose,
} from './styled';
import SearchInput from './SearchInput/searchInput';

const SearchBtn = () => {
  const [searchClose, setSearchClose] = useState(false);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const toggleSearchHandler = (e) => {
    setSearchClose(!searchClose);

    if (searchClose) {
      dispatch(closeSearch());
    }
  };

  const searchHandler = (e) => {
    const { value } = e.target;

    console.log('search', value);
    setSearch(value);
    dispatch(searchItems(value));
  };

  return (
    <>
      <ButtonWrapp
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        onClick={toggleSearchHandler}
      >
        {searchClose ? <SearchIconClose /> : <SearchIcon />}
      </ButtonWrapp>

      <SearchInput
        show={searchClose}
        searchItems={searchHandler}
        value={search}
      />
    </>
  );
};

export default SearchBtn;
