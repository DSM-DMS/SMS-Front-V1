import styled from "styled-components";

export const Container = styled.div<{ color?: string }>`
  display: flex;
  align-items: center;
  input[type="checkbox"] {
    margin: 0;
    background-color: ${props => props.color};
  }

  span {
    margin-left: 5px;
    color: ${props => props.color};
  }
`;

export const CheckBox = styled.div<{ isActive: boolean }>`
  width: 15px;
  height: 15px;
  background-color: ${props => (props.isActive ? "#888888" : "#f6f6f6")};
`;
