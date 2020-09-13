import styled, { css } from 'styled-components';

export const Container = styled.div``;
export const HR = styled.div<{ height: number }>`
  margin-top: 10px;
  height: ${(props) => props.height}px;
  background: black;
`;
export const HeaderText = styled.p`
  font-weight: bold;
`;
