import styled, { keyframes } from "styled-components";

export const Modal = styled.div`
  width: 480px;
  height: 650px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  padding: 40px;
`;

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 5;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: medium;
`;

export const Body = styled.div`
  height: 400px;
  box-sizing: border-box;
  padding-top: 20px;
`;

export const Footer = styled.div`
  height: 50px;
`;

export const Button = styled.button`
  background-color: #5323b2;
  border-radius: 5px;
  width: 100%;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 20px;
  padding: 10px 0;
  box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
`;

export const ErrMsgWrap = styled.div`
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const showErr = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`;

export const ErrMsg = styled.div`
  color: #ed1818;
  font-size: 17px;
  text-align: center;
  animation: ${showErr} 1s;
`;

export const TwiceInputWrap = styled.div`
  display: flex;
  margin-bottom: 20px;

  & > div:nth-child(2) {
    margin-left: 20px;
    margin-top: 0;
  }
`;
