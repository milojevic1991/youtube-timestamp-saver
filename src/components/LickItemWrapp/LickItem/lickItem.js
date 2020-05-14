import React from 'react';
import { LickItemBox } from './styled';

const LickItem = () => {
  return (
    <LickItemBox>
      <iframe
        width="50%"
        height="50%"
        src="https://www.youtube.com/embed/zVuscuKIMnw?start=130"
        frameborder="0"
        allowfullscreen
        title="nesto"
      ></iframe>
    </LickItemBox>
  );
};

export default LickItem;
