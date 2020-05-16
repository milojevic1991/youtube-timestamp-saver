import * as actionTypes from '../actions/actionTypes';
import { regex } from '../../regex';

const initialState = {
  listData: [],
  playData: [],
  play: false,
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_LINK:
      let linkData;
      // const regexYT = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*)(?:(\?t|&start)=(\d+))?.*/;

      let ids = action.payload.link.match(regex);

      // console.log('ids proba', ids[ids.length - 1]);
      // if (regexYT.test(action.payload.link) && ids[ids.length - 1]) {
      //   linkData = {
      //     ...action.payload,
      //     link: ids,
      //   };
      // } else {
      //   linkData = 'sss';
      // }
      // console.log(ids);

      linkData = {
        ...action.payload,
        link: ids,
      };

      return {
        ...state,
        listData: [...state.listData, linkData],
      };

    case actionTypes.DELETE_LINK:
      console.log('delete', action.payload);

      return {
        ...state,
        listData: state.listData.filter((el) => el['id'] !== action.payload),
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
        listData: action.payload,
      };
    default:
      return state;
  }
};

export default items;
