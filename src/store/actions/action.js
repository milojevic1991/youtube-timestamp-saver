import * as actionTypes from './actionTypes';

export const addItem = (data) => {
  return {
    type: actionTypes.ADD_LINK,
    payload: data,
  };
};

export const deleteItem = (id) => {
  return {
    type: actionTypes.DELETE_LINK,
    payload: id,
  };
};
