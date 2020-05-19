import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 30%;
  margin: 6rem 0;

  img {
    position: absolute;
    top: 102px;
    left: 30%;
    z-index: 1;
    opacity: 0.4;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  height: 90px;
  width: 1320px;
  align-items: center;
  justify-content: center;
  // background-color: #fff;
  // border-radius: 0.75rem;
  // box-shadow: 0 0.5rem 0.75rem -0.25rem rgba(39, 48, 54, 0.05);

  border-radius: 60px;
  background: #0f1423;
  box-shadow: 9px 9px 18px #0b0e19, -9px -9px 18px #131a2d;
`;

export const Title = styled.h1`
  font-size: 99px;
  color: #fff;
  font-weight: 700;\
  z-index: 10;
  position: relative
`;

export const Form = styled.form`
  // border: 1px solid #f00;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
`;

export const Input = styled.input`
  color: ${(props) => props.inputColor || 'palevioletred'};
  padding: 1.5em;
  margin: 10px 10px;
  box-sizing: border-box;
  color: black;
  background: #fff0;
  border: none;
  border-radius: 3px;
  width: 50%;
  height: 100%;
  color: #fff;
  font-weight: 500;
  font-size: 19px;
  font-family: 'Quicksand', sans-serif;

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

export const Submit = styled.button`
  padding: 0.5em;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 19px;
  font-family: 'Quicksand', sans-serif;
  background: #ef6509;
  border: none;
  border-radius: 10px 100px 100px 10px;
  width: 7%;
  height: 100%;
  position: relative;
  right: 0;
  top: 0;
  cursor: pointer;
  box-shadow: -6px 0px 10px #26262600, inset 0 0 10px #151c2e59;
  background: #ef6509;
  transition: 0.2s;

  i {
    z-index: 99999;
    font-size: 42px;
    color: #0f1423;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 78%;
    left: 46%;
    display: block;
    transform: translate(-50%, -50%);
  }
  &:hover {
    background: #cd5403;
    transition: 0.2s;
  }
  :focus {
    outline: none;
  }
`;
