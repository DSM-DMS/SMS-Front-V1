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

export const ParentLoadingWrap = styled.div`
  text-align: center;
`;

export const ParentOutingEmergencyText = styled.p`
  text-align: center;
  font-size: 11px;
  font-weight: 600;
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
`;

export const ParentActionBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border: 0;
  border-radius: 16px;
  color: white;
  font-size: 14px;
  cursor: pointer;
`;

export const ParentApproveBtn = styled(ParentActionBtn)`
  background-color: #038fff;
`;

export const ParentRejectBtn = styled(ParentActionBtn)`
  background-color: #ff5555;
`;
