import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-top: 2px solid #837266;
  text-align: center;
  background-color: #f7f6ff;
  height: 50px;
  display: flex;
  align-items: center;

  font-weight: bold;

  div:nth-child(1) {
    flex: 1;
  }
  div:nth-child(2) {
    flex: 3;
  }
  div:nth-child(3) {
    flex: 1;
  }
  div:nth-child(4) {
    flex: 1;
  }
  div:nth-child(5) {
    flex: 1;
  }
`;
