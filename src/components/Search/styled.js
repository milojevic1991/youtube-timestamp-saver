import styled from 'styled-components';
import { SearchAlt2 } from '@styled-icons/boxicons-regular/SearchAlt2';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { motion } from 'framer-motion';

// export const ButtonSection = styled.div`
//   height: 20%;
//   width: 25%;
//   position: absolute;
//   //   top: 200px;
//   right: 40px;
//   border: 1px solid #f00;
//   z-index: 100;
// `;

// export const ButtonWrapp = styled.div`
export const ButtonWrapp = styled(motion.div)`
  display: flex;
  height: 55px;
  width: 55px;
  align-items: center;
  justify-content: space-evenly;
  background-color: orange;
  border-radius: 50%;
  //   box-shadow: 0 0.5rem 0.75rem -0.25rem rgba(39, 48, 54, 0.05);
  //   margin: 2rem 0;
  bottom: 20px;
  position: fixed;
  right: 40px;
  cursor: pointer;
  background: linear-gradient(to right, #ffc500, #c21500);
  z-index: 10;
  box-shadow: 3px 3px 6px #141414, -3px -3px 34px #000000;
  transition: 0.2s all;

  &:hover {
    transform: scale(1.1) !important;
  }
`;

export const SearchIcon = styled(SearchAlt2)`
  height: 25px;
  width: 25px;
`;

export const SearchIconClose = styled(CloseOutline)`
  height: 27px;
  width: 27px;
`;
