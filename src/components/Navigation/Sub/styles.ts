import styled, { css } from 'styled-components';

export const Container = styled.div<{ isActive: boolean; isClose: boolean }>`
  position: relative;
  width: 0;
  z-index: 2;
  transition: 0.3s width;
  ${(props) =>
    props.isActive &&
    css`
      border-right: 1px solid #dddddd;
      width: 300px;
      height: 100%;
    `};

  ${(props) =>
    props.isClose &&
    css`
      width: 50px;
    `}
`;

export const CenterImg = styled.img<{ isClose: boolean }>`
  position: absolute;
  top: 50%;
  right: 20px;
  transition: 0.3s;
  transform: translateY(-50%);

  ${(props) =>
    props.isClose &&
    css`
      transform: translateY(-50%) rotate(180deg);
    `}
`;
