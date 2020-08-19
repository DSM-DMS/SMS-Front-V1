import styled from 'styled-components';

export const OutingCommonWrap = styled.div`
  border-radius: 5px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
`;

export const WarningWarp = styled(OutingCommonWrap)`
  padding: 24px 80px;
`;

export const WarningHead = styled.header`
  margin-bottom: 4px;
  padding-bottom: 4px;
  border-bottom: 2px solid #f7f6ff;
`;

export const WarningTitle = styled.h2`
  margin-top: 12px;
  font-size: 24px;
  font-weight: bold;
`;

export const WarningDescWarning = styled.p`
  padding-left: 8px;
  border-left: 2px solid #242424;
`;

export const WarningOuterList = styled.ol`
  line-height: 1.5;
  font-size: 14px;
`;

export const WarningOuterItem = styled.li`
  margin: 16px 0;
`;

export const WarningInnerItem = styled.li`
  margin: 8px 0;
  padding-left: 12px;
  > a {
    color: #5323b2;
    text-decoration: none;
  }
`;

export const ApplyWarp = styled(OutingCommonWrap)``;

export const HistoryWarp = styled(OutingCommonWrap)``;
