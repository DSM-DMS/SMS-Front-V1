import styled from 'styled-components';

export const Container = styled.div<{ colorSet: string }>`
  width: 15vw;
  box-sizing: border-box;
  padding: 40px 0 0 30px;
  background-color: ${(props) => props.colorSet};
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
  min-width: 220px;
  min-height: 600px;

  .active {
    color: ${(props) => props.colorSet};
  }
`;

export const BackgroundImgWrap = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
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
