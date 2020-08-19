import styled from 'styled-components';

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: 4px solid black;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  & + div {
    margin-left: 5px;
  }
`;

export const CategoryWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  > div {
    display: flex;
    align-items: center;
    div + span {
      margin-left: 5px;
    }
  }
`;
