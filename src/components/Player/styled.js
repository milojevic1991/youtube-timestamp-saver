import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${(props) =>
    props.active
      ? css`
          height: 100vh;
          width: 100vw;
          z-index: 1000;
          position: fixed;
          top: 0;
          left: 0;
          background: #0f1423;
          transition: 0.2s all;
          cursor: pointer;
          opacity: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        `
      : css`
          transition: 0.2s all;
          z-index: -1;
          //  transform: translateX(-100%);
          //  opacity: 0;
        `}
`;

export const PlayerWrapper = styled.div`
  height: 75%;
  width: 75%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  // box-shadow: 0 0 120px #050607;
`;
