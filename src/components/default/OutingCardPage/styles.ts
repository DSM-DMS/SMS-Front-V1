import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  width: calc(100% + 20px);
  transform: translateX(-10px);
  border-bottom: 2px solid #dddddd;
`;

export const HeaderText = styled.div`
  flex: 1;
  font-weight: bold;
`;

export const EmptyList = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  height: 700px;
  overflow-y: auto;
  margin-top: 20px;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #dddddd;
    border-radius: 5px;
  }
`;
