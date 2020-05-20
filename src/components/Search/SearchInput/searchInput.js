import React from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { SearchInputWrapp, SearchInputField } from './styled';

const SearchInput = ({ show, searchItems }) => {
  return (
    <>
      <AnimatePresence>
        {show ? (
          <SearchInputField
            key="modal"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
            onChange={searchItems}
            type="text"
          ></SearchInputField>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default SearchInput;
