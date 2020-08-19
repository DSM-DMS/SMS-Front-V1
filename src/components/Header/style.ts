import styled from 'styled-components';

export const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #dddddd;
  font-size: 12px;
  > button {
    margin-left: 16px;
    border: 0;
    color: #ff5555;
    background-color: transparent;
    font-size: 12px;
    font-weight: bold;
  }
`;
