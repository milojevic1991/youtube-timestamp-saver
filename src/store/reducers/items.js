import * as actionTypes from '../actions/actionTypes';
import { regex } from '../../regex';

const initialState = {
  listData: [],
  playData: [],
  displayedData: [],
  isSearching: false,
  play: false,
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_LINK:
      let linkData;

      let ids = action.payload.link.match(regex);

      linkData = {
        ...action.payload,

        link: ids,
      };

      return {
        ...state,
        isSearching: false,
        listData: [...state.listData, linkData],
      };

    case actionTypes.DELETE_LINK:
      console.log('delete', action.payload);

      return {
        ...state,
        isSearching: false,
        listData: state.listData.filter((el) => el['id'] !== action.payload),
        displayedData: state.displayedData.filter(
          (el) => el['id'] !== action.payload
        ),
      };

    case actionTypes.PLAY_VIDEO:
      console.log('play id', action.payload);

      return {
        ...state,
        playData: state.listData.filter((el) => el['id'] === action.payload),
        play: true,
      };

    case actionTypes.CANCEL_VIDEO:
      console.log('play id', action.payload);

      return {
        ...state,
        play: false,
        playData: [],
      };

    case actionTypes.LOAD_ITEMS:
      console.log('LOAD ITEMS EVO GA', action.payload);

      return {
        ...state,
        isSearching: false,
        listData: action.payload,
      };

    case actionTypes.SEARCH_ITEMS:
      console.log('SERCUJE SEARCH', action.payload);

      return {
        ...state,
        isSearching: true,
        displayedData: state.listData.filter((el) =>
          el.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    case actionTypes.CLOSE_SEARCH:
      return {
        ...state,
        isSearching: false,
      };
    default:
      return state;
  }
};

export default items;
