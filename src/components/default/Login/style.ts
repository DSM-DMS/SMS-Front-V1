import styled from "styled-components";

import { Check, CheckBlue } from "../../../assets";

export const LoginWrap = styled.div`
  width: 500px;
  margin: 200px auto 0;
  padding-bottom: 24px;
  border-radius: 4px;
`;

export const LoginForm = styled.div`
  padding: 48px 24px 96px;
  background-color: transparent;
`;

export const LoginTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 4px;
`;

export const LoginSubTitle = styled.p`
  color: #888888;
  font-size: 12px;
  margin-bottom: 12px;
`;

export const LoginTypeWrap = styled.div`
  display: flex;
  margin: 8px 0;
`;

export const LoginTypeLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const LoginTypeText = styled.span`
  font-size: 14px;
`;

export const LoginInputsWrap = styled.div`
  margin: 8px 0;
`;

export const LoginLabel = styled.label`
  display: block;
  margin-bottom: 24px;
  color: #888888;
`;

export const LoginInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 0;
  box-sizing: border-box;
  &:focus {
    outline: 1px solid rgb(133, 133, 133);
  }
`;

export const AutoLogin = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  margin-bottom: 12px;

  #auto-login:checked ~ #auto-login-checkbox {
    background-color: #038fff;
    background-image: url(${Check});
    box-shadow: -2px -2px 5px rgba(255, 255, 255, 1),
      3px 3px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const AutoLoginCheckbox = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  background-image: url(${CheckBlue});
  background-size: 14px;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 1),
    inset 3px 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const AutoLoginLabel = styled.label`
  display: flex;
  align-items: center;
  color: #242424;
  font-size: 14px;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  position: relative;
  width: 100%;
  padding: 10px 12px;
  border: 0;
  color: white;
  background-color: #038fff;
  font-size: 14px;
  box-sizing: border-box;
  overflow: hidden;
  transition: 0.3s;
  outline: auto;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -4.5em;
    transform: skewX(-45deg) translateX(0);
    transition: none;
    display: block;
    width: 3em;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
  }
  &:hover,
  &:focus {
    color: #fff;
    background-color: #ff5555;
    &:before {
      transform: skewX(-45deg) translateX(550px);
      transition: all 0.5s ease-in-out;
    }
  }
`;

export const ErrorMessage = styled.p`
  margin-bottom: 12px;
  color: red;
  font-size: 14px;
  transition: 0.3s;
  &.pointing {
    animation: shake 0.5s;
  }

  @keyframes shake {
    0% {
      transform: translateX(1px);
    }
    10% {
      transform: translateX(-1px);
    }
    20% {
      transform: translateX(-3px);
    }
    30% {
      transform: translateX(3px);
    }
    40% {
      transform: translateX(1px);
    }
    50% {
      transform: translateX(-1px);
    }
    60% {
      transform: translateX(-3px);
    }
    70% {
      transform: translateX(3px);
    }
    80% {
      transform: translateX(-1px);
    }
    90% {
      transform: translateX(1px);
    }
    100% {
      transform: translateX(1px);
    }
  }
`;
