import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SearchInputWrapp = styled.div`
  height: 50%;
  width: 50%;
  //   background: white;
  position: absolute;
  left: 25%;
`;

// export const SearchInputField = styled.input`
export const SearchInputField = styled(motion.input)`
  box-sizing: border-box;
  color: black;
  background: gray;
  border: none;
  font-weight: bold;
  font-size: 15px;
  font-family: 'Quicksand', sans-serif;
  border-radius: 60px;
  box-shadow: 9px 9px 18px #0b0e19, -9px -9px 18px #131a2d;

  height: 55px;
  width: 205px;
  bottom: 20px;
  position: fixed;
  right: 40px;
  z-index: 1;
  background: linear-gradient(to right, #ffc500, #c21500);
  padding: 1rem;

  :focus {
    outline: none;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active,
  &:-internal-autofill-selected {
    background-color: #fff0 !important;
    color: #fff !important;
  }

  ::placeholder {
    color: #434b64;
    font-weight: 600;
    font-size: 17px;
    font-family: 'Quicksand', sans-serif;
  }
`;
