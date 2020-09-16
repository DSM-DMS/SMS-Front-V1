import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
`;

export const Header = styled.div`
  display: flex;

  & > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    width: 120px;
  }
`;

export const HeaderText = styled.div`
  flex: 1;
`;

export const CardContainer = styled.div`
  max-height: 800px;
  overflow-y: auto;
  margin-top: 20px;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #dddddd;
    border-radius: 5px;
  }
`;
