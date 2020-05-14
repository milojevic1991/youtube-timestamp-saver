import React from 'react';
import { Wrapper } from './styled';
import YouTube from 'react-youtube';

import LickItem from './LickItem/lickItem';

const LickItemWrapp = () => {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <Wrapper>
      <LickItem />
      <LickItem />
      <LickItem />
    </Wrapper>
  );
};

export default LickItemWrapp;

// let res2 = a.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*)(?:(\?t|&start)=(\d+))?.*/)
