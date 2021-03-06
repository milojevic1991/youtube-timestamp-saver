import styled from 'styled-components';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { Play } from '@styled-icons/boxicons-regular/Play';
export const LickItemBox = styled.div`
  height: auto;
  width: 20%;
  background-color: #fff;
  margin: 4rem;
  padding: 3rem 1rem;
  box-sizing: border-box;
  border-radius: 50px;
  background: #0f1423;
  box-shadow: 7px 7px 25px #0b0e19, -7px -7px 25px #141a2e;
  box-shadow: 3px 3px 19px #05070e, -3px -3px 15px #1f273f;
  position: relative;

  img {
    position: absolute;
    opacity: 2.2;
    left: 92px;
    width: 15%;
    top: 63px;
    opacity: 0.6;
    z-index: 1;
  }
`;

export const LickItemTitle = styled.h3`
  color: #fff;
  font-size: 26px;
  width: 100%;
  height: 100%;
  z-index: 10;
  position: relative;
`;

export const LickItemDelete = styled(CloseOutline)`
  color: #ef65093d;
  height: 25px;
  width: 25px;
  position: absolute;
  right: 12px;
  top: 10px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #cd5403;
    transform: scale(1.5);
  }
`;

export const PlayIcon = styled(Play)`
  color: #ef6509;
  height: 40px;
  width: 40px;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
  padding: 5px;
  margin-left: 5px;

  // &:hover {
  //   color: #cd5403;
  //   transform: rotate(360deg);
  // }
`;

export const PlayBtn = styled.button`
  color: #e4610b;
  border: none;
  text-align: center;
  vertical-align: middle;
  height: 80px;
  width: 80px;
  cursor: pointer;
  margin: 0 auto;
  border-radius: 70px;
  background: #0f1423;
  box-shadow: 5px 5px 12px #06080e, -1px -2px 12px #182038;

  border-radius: 50%;
  background: #0f1423;
  // box-shadow: inset 5px 5px 9px #0c101b, inset -5px -5px 9px #12182b;
  box-shadow: inset 5px 5px 9px #07091082, inset -5px -5px 9px #12182b;

  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-weight: 600;
  font-size: 13px;
  position: relative;
  margin-top: 3rem;
  transition: 0.2s all;

  &:hover {
    //
    border-radius: 50%;
    // background: #0c111e;
    // box-shadow: 9px 9px 18px #0b0f1a, -9px -9px 18px #0d1322;
    box-shadow: inset 5px 5px 9px #020305a6, inset -5px -5px 9px #12182b;
    transition: box-shadow 0.2s;
  }

  &:hover ${PlayIcon} {
    transform: scale(1.3);
    // transform: scale(1.9);
    color: #f00;
  }

  :focus {
    transform: translateY(2px) scale(0.9);
    box-shadow: inset 5px 5px 19px #020305a6, inset -5px -5px 9px #12182b;
    outline: none;
    transition: 0.2s all;
  }
  :visited {
    transform: translateY(0px);
  }
`;
