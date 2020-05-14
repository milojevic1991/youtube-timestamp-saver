import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 30%;
  margin: 6rem 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  height: 100px;
  width: 1320px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 0.75rem;
  box-shadow: 0 0.5rem 0.75rem -0.25rem rgba(39, 48, 54, 0.05);
`;

export const Form = styled.form`
  border: 1px solid #f00;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
`;

export const Input = styled.input`
  color: ${(props) => props.inputColor || 'palevioletred'};
  padding: 0.5em;
  margin: 10px 10px;
  box-sizing: border-box;
  color: black;
  background: #fff;
  border: none;
  border-radius: 3px;
  width: 50%;
  height: 100%;
`;

export const Submit = styled.input`
  padding: 0.5em;
  /* margin: 10px 10px; */
  box-sizing: border-box;
  color: #fff;
  background: #c8c8c8;
  border: none;
  border-radius: 3px;
  width: 10%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;
