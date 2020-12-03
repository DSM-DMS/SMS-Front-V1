import styled from "styled-components";

import { UserType } from "../../modules/action/header";

interface BaseColor {
  baseColor: UserType;
}

const STUDENT_BASE_COLOR = "#5323b2";
const TEACHER_BASE_COLOR = "#23B2AD";

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
  margin-bottom: 24px;
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
`;

export const AutoLoginCheckbox = styled.input`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  cursor: pointer;
`;

export const AutoLoginLabel = styled.label`
  color: #242424;
  font-size: 12px;
  cursor: pointer;
`;

export const LoginButton = styled.button<BaseColor>`
  position: relative;
  width: 100%;
  padding: 10px 12px;
  border: 0;
  color: white;
  background-color: ${({ baseColor }) =>
    baseColor === "student" ? STUDENT_BASE_COLOR : TEACHER_BASE_COLOR};
  font-size: 14px;
  box-sizing: border-box;
  overflow: hidden;
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
  &:hover {
    border-bottom: 4px solid darken(#ff5555, 10%);
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
`;
