import styled, { css } from "styled-components";

export const Container = styled.div<{ readOnly: boolean }>`
  ${props =>
    props.readOnly &&
    css`
      & > div {
        color: #989797;
      }
      & > input {
        color: #989797;
        border-bottom: 1px solid #989797;
      }
    `}

  &+ & {
    margin-top: 20px;
  }
`;
export const Name = styled.div`
  color: #5323b2;
  font-size: 15px;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  margin-top: 3px;
  padding-bottom: 3px;
  color: black;
  font-weight: bold;
  font-size: 17px;
  border-bottom: 2px solid #5323b2;

  & + & {
    margin-top: 20px;
  }

  &::placeholder {
    color: #6c6c6c;
    font-weight: normal;
  }
`;
