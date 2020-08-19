import styled from 'styled-components';

export const MainWrap = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f7f6ff;
`;

export const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
`;

export const MainRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
`;

export const MainContentCommon = styled.div`
  border-radius: 5px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
`;

export const MainContentTitleCommon = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

export const Schedule = styled(MainContentCommon)`
  margin-bottom: 15px;
  margin-right: 15px;
`;

export const ScheduleHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 4px 8px 12px;
`;

export const ScheduleHeaderDateSetting = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;

export const ScheduleArrow = styled.img`
  width: 14px;
  margin: 0 4px;
  cursor: pointer;
  padding: 4px;
  transform: rotate(-90deg);
  &:last-child {
    transform: rotate(90deg);
  }
`;

export const Timetable = styled(MainContentCommon)`
  margin-right: 15px;
`;

export const TimetableTitle = styled(MainContentTitleCommon)`
  padding: 8px 4px 8px 12px;
  border-bottom: 2px solid #dddddd;
`;

export const TimetableList = styled.ul`
  display: flex;
`;

export const TimetableItem = styled.li`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  box-sizing: border-box;
  text-align: center;
  word-break: keep-all;
`;

export const TimetableItemDate = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 10px;
  font-weight: normal;
`;

export const ScheduleDetail = styled(MainContentCommon)`
  height: 75%;
  margin-bottom: 15px;
`;

export const DetailHeader = styled.header`
  padding: 8px 4px 8px 12px;
  border-bottom: 2px solid #dddddd;
`;

export const DetailTitle = styled(MainContentTitleCommon)``;

export const DetailHead = styled.p`
  margin-top: 16px;
  font-size: 12px;
  font-weight: bold;
`;

export const DetailHeadData = styled.span`
  display: inline-block;
  &:first-child {
    width: 65%;
  }
  &:last-child {
    width: 35%;
  }
`;

export const DetailBody = styled.div`
  height: 320px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    background: white;
  }
  ::-webkit-scrollbar-thumb {
    background: #5323b2;
    border-radius: 16px;
  }
`;

export const DetailBodyItem = styled.p`
  padding: 8px 4px 8px 12px;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  font-size: 12px;
`;

export const DetailBodyItemData = styled.span`
  display: inline-block;
  &:first-child {
    width: 65%;
  }
  &:last-child {
    width: 35%;
  }
`;

export const Outing = styled(MainContentCommon)`
  height: 40%;
`;

export const OutingTitle = styled(MainContentTitleCommon)`
  padding: 8px 12px;
  border-bottom: 2px solid #dddddd;
`;

export const OutingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px;
  padding: 6px 12px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  cursor: pointer;
  &:first-child {
    color: white;
    background-color: #ff5555;
  }
`;

export const OutingItemDesc = styled.span`
  font-size: 12px;
`;
