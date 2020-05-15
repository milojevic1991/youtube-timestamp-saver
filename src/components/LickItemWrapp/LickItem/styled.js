import styled from 'styled-components';
import { CloseCircle } from '@styled-icons/evaicons-solid/CloseCircle';
export const LickItemBox = styled.div`
  height: 50%;
  width: 30%;
  background-color: white;
  margin: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.75rem;
  box-shadow: 0 0.5rem 0.75rem -0.25rem rgba(39, 48, 54, 0.12);
`;

export const LickItemTitle = styled.h3`
  color: black;
  font-size: 20px;
`;

export const LickItemDelete = styled(CloseCircle)`
  color: red;
  height: 50px;
  width: 30px;
`;
