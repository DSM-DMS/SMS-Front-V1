import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;
`;

export const Img = styled.img`
  width: 20px;
  height: 20px;
`;

export const ImgWrap = styled.div<{ isActive: boolean }>`
  margin-top: 10px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isActive &&
    css`
      background-color: #f7f6ff;
      box-shadow: 0px 3px 2px 1px rgba(0, 0, 0, 0.16);
    `}
`;
