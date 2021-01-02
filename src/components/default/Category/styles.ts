import styled, { css } from "styled-components";

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

export const FieldWrap = styled.div`
  position: relative;
`;

export const Fields = styled.div<{ isOpen: boolean }>`
  display: none;
  position: absolute;
  top: calc(100% + 5px);
  border-color: 1px solid #dddddd;
  ${props =>
    props.isOpen &&
    css`
      display: flex;
    `}
`;

export const CategoryBtn = styled.span`
  width: 50px;
  color: #23b2ad;
  text-align: center;
  cursor: pointer;
  border: 2px solid #23b2ad;
  border-radius: 30px;
  transition: 200ms all;

  &.active {
    background-color: #23b2ad;
    color: white;
  }

  & + & {
    margin-left: 10px;
  }
`;

export const Count = styled.span`
  color: #5323b2;
`;

export const WriteCatrgoty = styled.div`
  display: flex;
  align-items: stretch;
  padding-bottom: 3px;

  > span {
    margin-right: 10px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  margin-left: 10px;
`;

export const Hr = styled.div`
  width: 2px;
  margin: 0 5px;
  background-color: #888888;
`;
