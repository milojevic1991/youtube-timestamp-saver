import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Active, PlayerWrapper } from './styled';
import { motion, AnimatePresence } from 'framer-motion';

const Player = ({ videoData, cancelPlayer }) => {
  const state = useSelector((state) => state.items);
  console.log('videoData u plejeru', videoData);

  const [show, setShow] = useState(true);

  const click = () => {
    setShow(!show);
  };

  const playerItem = videoData.playData.length ? (
    <PlayerWrapper
      key="modal"
      initial={{ scale: 0 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      // exit={{ scale: 0 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.18 }}
    >
      <iframe
        style={{ boxShadow: '0 10px 80px #000000b5;' }}
        width="100%"
        height="100%"
        allow="autoplay"
        //  src="https://www.youtube.com/embed/mjVRS2X7z_0?start=130"
        // src={`https://www.youtube.com/embed/${videoData.playData[0].link[2]}?autoplay=1&mute=0&enablejsapi=1?start=${videoData.playData[0].link[4]}`}
        src={`https://www.youtube.com/embed/${videoData.playData[0].link[2]}?start=${videoData.playData[0].link[4]}&autoplay=1`}
        frameborder="0"
        allowfullscreen
        title="nesto"
      ></iframe>
    </PlayerWrapper>
  ) : null;

  return (
    <>
      <AnimatePresence>
        <Wrapper active={state.play} onClick={cancelPlayer}></Wrapper>
        {playerItem}
      </AnimatePresence>
    </>
  );
};

export default Player;
