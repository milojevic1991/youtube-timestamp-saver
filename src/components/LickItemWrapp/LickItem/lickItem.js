import React from 'react';
import { LickItemBox, LickItemTitle, LickItemDelete, Play } from './styled';

const LickItem = ({ linkData, deleteLink, playLink }) => {
  const listBox = linkData.map((el, index) => (
    <LickItemBox key={index}>
      {/* prettier-ignore */}
      <LickItemDelete onClick={() => deleteLink(el.id)} />
      <LickItemTitle>{el.title}</LickItemTitle>
      <iframe
        width="50%"
        height="50%"
        // src="https://www.youtube.com/embed/zVuscuKIMnw?start=130"

        src={`https://www.youtube.com/embed/${el.link[2]}?start=${el.link[4]}`}
        frameborder="0"
        allowfullscreen
        title="nesto"
      ></iframe>
      <Play onClick={() => playLink(el.id)}>Play</Play>
    </LickItemBox>
  ));

  return listBox;
  // { listBox };
};

export default LickItem;
