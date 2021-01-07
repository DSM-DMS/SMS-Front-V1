import { Link } from "react-router-dom";
import styled from "styled-components";

export const MovePageWrap = styled.div`
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  color: #888888;
  font-size: 14px;
`;

export const MovePage = styled(Link)`
  padding: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: unset;

  & + & {
    border-top: 1px solid #dddddd;
  }
`;

export const PageTitle = styled.span`
  margin-left: 20px;
`;

export const MoveIcon = styled.div<{ rotate?: number }>`
  display: inline-block;
  margin-left: 3px;
  border-bottom: 7px solid #888888;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  transform: rotate(${props => props.rotate || 0}deg);
`;
