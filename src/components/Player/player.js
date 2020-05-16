import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Active, PlayerWrapper } from './styled';

const Player = ({ videoData, cancelPlayer }) => {
  const state = useSelector((state) => state.items);
  console.log('videoData u plejeru', videoData);

  const [show, setShow] = useState(true);

  const click = () => {
    setShow(!show);
  };

  const playerItem = videoData.playData.length ? (
    <Wrapper active={state.play} onClick={cancelPlayer}>
      <PlayerWrapper>
        <iframe
          style={{ boxShadow: '0 10px 80px #000000b5;' }}
          width="75%"
          height="75%"
          //  src="https://www.youtube.com/embed/mjVRS2X7z_0?start=130"
          src={`https://www.youtube.com/embed/${videoData.playData[0].link[2]}?start=${videoData.playData[0].link[4]}`}
          frameborder="0"
          allowfullscreen
          title="nesto"
        ></iframe>
      </PlayerWrapper>
    </Wrapper>
  ) : null;

  return playerItem;
};

export default Player;
