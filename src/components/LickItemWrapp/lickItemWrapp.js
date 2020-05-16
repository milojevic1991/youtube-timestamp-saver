import React, { useEffect } from 'react';
import { Wrapper } from './styled';
import YouTube from 'react-youtube';
import { useSelector, useDispatch } from 'react-redux';
import LickItem from './LickItem/lickItem';

import { deleteItem, playVideo, loadItems } from '../../store/actions/action';

const LickItemWrapp = () => {
  const state = useSelector((state) => state.items.listData);
  const dispatch = useDispatch();

  const deleteHandler = (e) => {
    console.log('evp ga', e);
    dispatch(deleteItem(e));
  };

  const playHandler = (e) => {
    dispatch(playVideo(e));
    // console.log('play', e);
  };

  useEffect(() => {
    const data = localStorage.getItem('reduxState')
      ? JSON.parse(localStorage.getItem('reduxState'))
      : [];

    if (Object.values(data).length === 0) {
      dispatch(loadItems([]));
    } else {
      dispatch(loadItems(data));
    }
  }, [dispatch]);

  return (
    <Wrapper>
      <LickItem
        playLink={playHandler}
        deleteLink={deleteHandler}
        linkData={state}
      />
    </Wrapper>
  );
};

export default LickItemWrapp;

// let res2 = a.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*)(?:(\?t|&start)=(\d+))?.*/)
