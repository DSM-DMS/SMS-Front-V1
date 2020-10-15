import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 70px 150px;
`;

export const P = styled.div`
  margin: 15px 0;
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
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

interface DefaultProps {
  color: string;
  backgroundColor: string;
}

const defaultCss = css`
  border: 1px solid #dddddd;
  font-size: 15px;
  padding: 8px 33px;

  &:nth-child(2) {
    margin-left: 10px;
  }
`;

export const GoToEdit = styled(Link)<DefaultProps>`
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  ${defaultCss}
`;

export const Button = styled.button<DefaultProps>`
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  ${defaultCss}
`;
