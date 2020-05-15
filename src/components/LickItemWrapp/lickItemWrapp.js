import React from 'react';
import { Wrapper } from './styled';
import YouTube from 'react-youtube';
import { useSelector, useDispatch } from 'react-redux';
import LickItem from './LickItem/lickItem';

import { deleteItem } from '../../store/actions/action';

const LickItemWrapp = () => {
  const state = useSelector((state) => state.items.listData);
  const dispatch = useDispatch();

  const deleteHandler = (e) => {
    console.log('evp ga', e);
    dispatch(deleteItem(e));
  };

  return (
    <Wrapper>
      <LickItem deleteLink={deleteHandler} linkData={state} />
    </Wrapper>
  );
};

export default LickItemWrapp;

// let res2 = a.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*)(?:(\?t|&start)=(\d+))?.*/)
