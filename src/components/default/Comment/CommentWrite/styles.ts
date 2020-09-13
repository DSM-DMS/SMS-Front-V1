import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 7px;
`;
export const TextArea = styled.textarea<{ border: boolean; height: number }>`
  resize: none;
  flex: 1;
  border: 1px solid #d3d3d3;
  padding-left: 2px;

  height: ${(props) => props.height}px;

  ${(props) =>
    props.border &&
    css`
      border-top: 2px solid black;
    `}
`;
export const SubmitButton = styled.button`
  background: black;
  color: white;
  padding: 6px 30px;
  border: none;
`;
