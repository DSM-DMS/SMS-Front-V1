import styled from "styled-components";

export const Container = styled.div`
  padding: 100px 150px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const WriteNoticeBtn = styled.button`
  border: 1px solid #dddddd;
  background: #fbfbfb;
  box-sizing: border-box;
  margin-left: 15px;
  padding: 0px 10px;
`;

export const BoardWrap = styled.div`
  margin-top: 15px;
`;
