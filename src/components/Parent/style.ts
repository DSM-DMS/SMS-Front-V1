import styled from "styled-components";

export const ParentWrap = styled.div`
  width: 400px;
  margin: auto;
  padding: 12px 20px;
  overflow: hidden;
  box-sizing: border-box;
  font-size: 12px;
  @media (max-width: 424px) {
    & {
      width: 100%;
      padding: 16px;
    }
  }
`;

export const ParentOutingInfo = styled.div`
  margin-bottom: 32px;
`;

export const ParentOutingItem = styled.div`
  position: relative;
  margin-bottom: 8px;
  padding: 12px;
  border-radius: 6px;
  background: rgb(245, 245, 245);
  cursor: pointer;
`;

export const ParentOutingTitle = styled.span`
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 500;
`;

export const ParentOutingPara = styled.p`
  color: rgb(70, 77, 82);
  font-size: 12px;
  font-weight: 600;
`;

export const ParentAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    border: 0;
    border-radius: 16px;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }
  > button:first-child {
    background-color: #038fff;
  }
  > button:last-child {
    background-color: #ff5555;
  }
`;
