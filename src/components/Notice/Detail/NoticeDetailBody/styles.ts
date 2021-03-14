import styled, { css } from "styled-components";

export const Container = styled.div``;

export const Hr = styled.div`
  border: 2px solid #888888;
  width: 100%;
`;

export const List = styled.div`
  margin-left: 10px;
`;

export const ListItem = styled.li<{ unOrdered: boolean }>`
  ${props =>
    props.unOrdered &&
    css`
      list-style: none;
    `}
`;

export const Content = styled.div`
  white-space: pre-wrap;
  height: 600px;
  overflow-y: auto;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: block;
    font-weight: bold;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.17em;
  }

  h4 {
  }

  h5 {
    font-size: 0.83em;
  }

  h6 {
    font-size: 0.67em;
  }
`;
