import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 70px;
`;

export const BoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  max-height: 620px;
  overflow-y: scroll;
  width: 1135px;
  margin: 0 auto;
  margin-top: 20px;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: white;
  }
  ::-webkit-scrollbar-thumb {
    background: #dddddd;
    border-radius: 5px;
  }
`;
