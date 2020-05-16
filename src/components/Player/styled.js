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
          background-color: #242637;
          transition: 0.2s all;
          cursor: pointer;
          opacity: 1;
        `
      : css`
          height: 100vh;
          width: 100vw;
          z-index: 1000;
          position: fixed;
          top: 0;
          left: 0;
          background-color: #242637;
          transition: 0.2s all;
          z-index: -1;
          //  transform: translateX(-100%);
          //  opacity: 0;
        `}
`;

export const PlayerWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
