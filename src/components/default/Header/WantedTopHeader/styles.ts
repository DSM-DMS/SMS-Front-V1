import styled from "styled-components";

export const TopHeader = styled.div`
  padding-left: 50px;
  display: flex;
  justify-content: space-between;

  > div:nth-child(1) {
    display: flex;
    > button {
      margin-left: 5px;
    }
  }
`;

export const PreviewButton = styled.button`
  border: 1px solid #888888;
  color: #888888;
  background: white;
  padding: 2px;
`;
