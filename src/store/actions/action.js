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

export const playVideo = (id) => {
  return {
    type: actionTypes.PLAY_VIDEO,
    payload: id,
  };
};

export const cancelVideo = () => {
  return {
    type: actionTypes.CANCEL_VIDEO,
  };
};

export const loadItems = (items) => {
  return {
    type: actionTypes.LOAD_ITEMS,
    payload: items,
  };
};
