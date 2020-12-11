import styled from "styled-components";
import { Link } from "react-router-dom";

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
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const FiltersWrap = styled.div`
  display: flex;
`;

export const FilterReset = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 8px;
  border: 0;
  border-radius: 8px;
  background: #f6f6f6;
  font-size: 16px;
  font-weight: bold;
  > img.rolling {
    animation: roll 1s alternate;
    @keyframes roll {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

export const FilterDayWrap = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
  padding: 4px 0;
  cursor: pointer;
  &.today {
    color: #ea0000;
  }
  &.selected {
    color: #0275ff;
  }
`;

export const FilterText = styled.span`
  font-size: 14px;
  font-weight: normal;
`;

export const FilterRadio = styled.div`
  position: relative;
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border: 0.5px solid rgb(133, 133, 133);
  border-radius: 50%;
  cursor: pointer;
  &.selected {
    border: 0.5px solid #0275ff;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: inline-block;
      width: 6px;
      height: 6px;
      background-color: #0275ff;
      border-radius: 50%;
    }
  }
`;

export const ScheduleDetail = styled(MainContentCommon)`
  height: 75%;
  margin-bottom: 15px;
`;

export const DetailHeader = styled.header`
  padding: 8px 4px 8px 12px;
  border-bottom: 2px solid #dddddd;
`;

export const DetailHeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DetailTitle = styled(MainContentTitleCommon)``;

export const DetailAddSchedule = styled.button`
  position: relative;
  border: 1px solid #dddddd;
  padding: 4px 6px;
  border-radius: 8px;
  background-color: white;
  font-size: 14px;
  transition: 300ms;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 25%;
    height: 100%;
    border-radius: 8px;
    background-color: rgba(35, 178, 173, 0.3);
    transition: all ease-in 300ms;
  }
  &:hover::before {
    width: 100%;
    background-color: rgba(35, 178, 173, 0.6);
  }
  &:active {
    transform: scale(0.98);
  }
  > span {
    position: relative;
    color: #868686;
  }
`;

export const DetailHead = styled.p`
  margin-top: 16px;
  font-size: 12px;
  font-weight: bold;
`;

export const DetailHeadData = styled.span`
  display: inline-block;
  vertical-align: middle;
  &:first-child {
    width: 55%;
  }
  &:last-child {
    width: 25%;
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

export const DetailBodyItem = styled.div`
  position: relative;
  padding: 8px 4px 8px 12px;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  font-size: 12px;
`;

export const DetailBodyItemData = styled.span`
  display: inline-block;
  &:first-child {
    width: 55%;
  }
  &:last-child {
    width: 25%;
  }
`;

export const DetailBodyItemButtonWrap = styled.div`
  position: absolute;
  top: 50%;
  right: 3%;
  transform: translateY(-50%);
`;

export const DetailBodyItemButton = styled.button`
  padding: 4px 8px;
  border: 0;
  border-radius: 4px;
  background: #1a73e8;
  color: white;
  font-size: 10px;
  &:first-child {
    margin-right: 4px;
    background-color: #1a73e8;
  }
  &:last-child {
    background-color: #c70000;
  }
`;

export const Outing = styled(MainContentCommon)`
  height: 40%;
`;

export const OutingTitle = styled(MainContentTitleCommon)`
  padding: 8px 12px;
  border-bottom: 2px solid #dddddd;
`;

export const OutingItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px;
  padding: 6px 12px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  &:first-child {
    border: 0;
    color: white;
    background-color: #ff5555;
  }
  &:hover {
    filter: drop-shadow(3px 1px 5px #888888);
  }
`;

export const OutingItemDesc = styled.span`
  font-size: 12px;
`;
