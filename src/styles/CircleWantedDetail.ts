import styled from "styled-components";

export const Container = styled.div`
  padding: 5px 50px;
  position: relative;
`;

export const Hr = styled.div`
  width: 100%;
  height: 0;
  border-top: 2px solid #f7f6ff;
  position: absolute;
  left: 0;
  margin: 10px 0;
`;

export const CircleName = styled.div`
  font-size: 40px;
  font-weight: bolder;
`;

export const Header = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f7f6ff;

  > button {
    height: 40px;
  }
`;

export const Main = styled.div`
  padding: 50px;
`;

export const ContentWrap = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const ContentLeftWrap = styled.div`
  flex: 7;
`;

export const ContentRightWrap = styled.div`
  flex: 3;
`;

export const H2 = styled.h2`
  font-size: 32px;
`;

export const MarginHeight = styled.div<{ height: string }>`
  margin: ${props => props.height}px 0;
`;

export const IntroduceText = styled.div`
  color: #707070;
  font-size: 15px;
`;

export const GrayTile = styled.div`
  color: #888888;
  font-weight: bold;
`;

export const GrayInput = styled.input<{ width?: string }>`
  background: #f6f6f6;
  border: none;
  margin: 3px 0;
  padding: 8px;
  width: ${props => props.width};
`;

export const Bold = styled.div`
  color: black;
  font-weight: bold;
`;

export const DateWrap = styled.div`
  span {
    margin: 0 15px;
  }
`;

export const InputWrap = styled.div`
  width: 40%;
`;
