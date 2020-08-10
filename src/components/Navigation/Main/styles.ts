import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  box-sizing: border-box;
  padding: 40px 0 0 30px;
  background-color: #5323b2;
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const BackgroundImgWrap = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  text-align: center;
`;

export const Circle = styled.img<{
  top: number;
  left: number;
}>`
  position: relative;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;
