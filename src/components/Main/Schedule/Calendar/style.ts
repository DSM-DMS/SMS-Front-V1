import styled from "styled-components";

import { STUDENT, UserType } from "../../../../modules/action/header";

export const Calendar = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`;

export const CalendarLoadingWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 480px;
`;

export const CalendarDTemp = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  width: calc(100% / 7);
  padding: 4px 8px;
  font-size: 12px;
`;

interface DateBorderColor {
  type: UserType;
}

export const CalendarDate = styled(CalendarDTemp)<DateBorderColor>`
  position: relative;
  height: 80px;
  border: 1.5px solid transparent;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 20%);
  cursor: default;
  &.prev {
  }
  &.curr {
    color: black;
    cursor: pointer;
    &:hover {
      background-color: #e9e9e9;
      & > button {
        display: flex;
      }
    }
  }
  &.selected {
    border: 1.5px solid
      ${({ type }) => (type === STUDENT ? "#5323b2" : "#23B2AD")};
  }
  &.today > span {
    color: white;
    background-color: #ff5555;
  }
`;

export const CalendarDay = styled(CalendarDTemp)`
  align-items: flex-end;
  height: 30px;
  border-bottom: 2px solid #dddddd;
  color: rgb(75, 75, 75);
  font-weight: bold;
  &.dayOfWeek {
    border-color: #ff5555;
  }
`;

export const CalendarDaySpan = styled.span`
  width: 18px;
  height: 18px;
  line-height: 18px;
  padding: 2px;
  border-radius: 50%;
  text-align: center;
`;

interface Bar {
  weekOfMonth: number;
  sDay: number;
  eDay: number;
  overlap: number;
  backgroundColor: string;
}

export const CalendarBar = styled.div<Bar>`
  position: absolute;
  top: ${({ weekOfMonth, overlap }) => {
    const lineHeight = 17;
    const weekHeight = 80;
    const defaultTop = 60;
    return lineHeight * overlap + weekHeight * (weekOfMonth - 1) + defaultTop;
  }}px;
  left: ${({ sDay }) => `calc(100% / 7 * ${sDay});`};
  width: ${({ sDay, eDay }) => `calc((100% / 7) * (${eDay} - ${sDay} + 1))`};
  padding-left: 2px;
  outline: 1px solid white;
  color: white;
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: 8px;
  box-sizing: border-box;
  cursor: pointer;
  &.prev {
    background-color: gray;
  }
`;

export const CalendarBarDetail = styled.p`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
