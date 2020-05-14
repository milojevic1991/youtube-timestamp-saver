import * as actionTypes from '../actions/actionTypes';

const initialState = {
  listData: [],
};

const addVideo = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_LINK:
      const ids = action.payload.link.match(
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*)(?:(\?t|&start)=(\d+))?.*/
      );

      const linkData = {
        ...action.payload,
        link: ids,
      };
      console.log(ids);

      return {
        ...state,
        listData: [...state.listData, linkData],
      };

    default:
      return state;
  }
};

export default addVideo;
