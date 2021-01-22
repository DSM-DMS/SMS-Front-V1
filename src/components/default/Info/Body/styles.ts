import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-height: 650px;
  overflow-y: auto;

  ::-webkit-scrollbar-thumb {
    background: #dddddd;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background: white;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
`;

export const Flex = styled.div`
  display: flex;
`;

export const Color = styled.div`
  color: #888888;

  b {
    font-weight: bold;
  }
`;
