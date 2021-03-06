import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

interface Type {
  type?: string;
}

export const DETAIL = "DETAIL";
export const LIST = "LIST";

export const Img = styled.img<Type>`
  ${props =>
    props.type === LIST &&
    css`
      width: 44px;
      height: 44px;
    `}

  ${props =>
    props.type === DETAIL &&
    css`
      width: 30px;
      height: 30px;
    `}
`;

export const Title = styled.div<Type>`
  ${props =>
    props.type === LIST &&
    css`
      font-size: 30px;
      font-weight: bold;
      margin-top: 20px;
    `}

  ${props =>
    props.type === DETAIL &&
    css`
      margin-top: 0;
      margin-left: 20px;
      font-size: 23px;
    `}
`;

export const Button = styled(Link)<{ color: string; newBtn?: boolean }>`
  padding: 10px 20px;
  color: white;
  font-size: 12px;
  border-radius: 5px;
  text-decoration: none;
  background-color: ${props => props.color};

  ${props =>
    props.newBtn &&
    css`
      margin-right: 30px;
    `}

  margin-left:10px;
  & + & {
    margin-left: 10px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: flex-end;
  width: 20%;
`;

export const Container = styled.div<Type>`
  display: flex;
  ${props =>
    props.type === LIST &&
    css`
      flex-direction: column;
    `}

  ${props =>
    props.type === DETAIL &&
    css`
      flex-direction: row;
      margin-right: 20px;
      align-items: center;
    `}
`;
