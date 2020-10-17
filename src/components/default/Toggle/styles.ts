import styled from "styled-components";

export const Container = styled.button<{
  backgroundColor: string;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  border-radius: 24px;
  padding: 3px 5px;
  border: none;
  > * + * {
    margin-left: 5px;
  }
`;

export const Circle = styled.div<{
  backgroundColor: string;
}>`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: ${props => props.backgroundColor};
`;

export const Text = styled.span<{ color: string }>`
  color: ${props => props.color};
`;
