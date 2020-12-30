import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: stretch;
  margin: 5px 0;
  position: relative;
  input,
  button {
    box-sizing: border-box;
    width: 100%;
    height: 28px;
    padding: 0px;
    background: #f6f6f6;
    border: none;
  }

  > div {
    height: 28px;
    margin: 0 6px;
    position: relative;
    &:nth-child(1),
    &:nth-child(3) {
      input {
        text-align: center;
      }
      width: 70px;
    }

    &:nth-child(2) {
      input {
        box-sizing: border-box;
        padding-left: 5px;
      }
      flex: 1;
    }
  }
`;

export const SelectWrap = styled.div`
  background-color: #f6f6f6;

  > div:nth-child(1) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-left: 4px solid transparent;
  border-top: 4px solid black;
  border-right: 4px solid transparent;
`;

export const SelectMenu = styled.div`
  color: #888888;
  background-color: #f6f6f6;
  z-index: 2;
  width: 100%;
  text-align: center;
  position: absolute;
`;

export const DeleteBtnWrap = styled.div`
  position: absolute !important;
  left: calc(100% + 5px);
  display: flex;
  width: 30px;
  justify-content: center;
  align-items: center;

  img {
    height: 12px;
  }
`;
