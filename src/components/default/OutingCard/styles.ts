import styled from 'styled-components';

export const Container = styled.div`
  width: 275px;
  height: 200px;
  box-sizing: border-box;
  border: 1px solid #dddddd;
  display: inline-flex;
  margin: 10px;
  padding: 40px 30px;
  flex-direction: column;
  transition: 0.25s background;

  &:hover {
    background: #dddddd;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div:nth-child(1) {
    font-weight: bold;
    font-size: 20px;
  }
`;

export const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > div {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
  }
`;

export const FlexBetween = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Bar = styled.div`
  margin-left: 20px;

  & + div {
    font-weight: bold;
  }
`;
