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

  div {
    flex: 1;
  }

  div:nth-child(2) {
    flex: 3;
  }
`;

export const OutingItemContainer = styled(Container)`
  div:nth-child(2) {
    flex: 1;
  }
  div:nth-child(4) {
    flex: 2;
  }
  div:nth-child(3) {
    flex: 3;
    text-align: left;
  }
  div:nth-child(5) {
    flex: 3;
  }
`;
