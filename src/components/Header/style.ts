import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #dddddd;
  font-size: 14px;
  > a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const MovePasswordChange = styled(Link)`
  margin: 0 16px;
  color: #838383;
  &:hover {
    color: black;
  }
`;

export const Logout = styled(Link)`
  color: #ff5555;
  &:hover {
    color: red;
  }
`;
