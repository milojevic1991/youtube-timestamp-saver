import * as actionTypes from '../actions/actionTypes';
import { regex } from '../../regex';

const initialState = {
  listData: [],
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
    default:
      return state;
  }
};

export default items;
