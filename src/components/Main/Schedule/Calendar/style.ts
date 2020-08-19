import styled, { css } from 'styled-components';

export const Calendar = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
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

export const CalendarDate = styled(CalendarDTemp)`
  height: 60px;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 20%);
  cursor: default;
  &.curr {
    color: black;
    cursor: pointer;
  }
  &.curr:hover {
    background-color: #e9e9e9;
  }
  &.selected {
    border: 1.5px solid #5323b2;
  }
  &.today > span {
    color: white;
    background-color: #ff5555;
  }
  /* .cal_line {
    height: 20px;
    padding-left: 8px;
    background-color: #c586ff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: white;
    box-sizing: border-box;
    cursor: pointer;
  }
  .cal_line_start {
    border-radius: 4px 0 0 4px;
  }
  .cal_line_end {
    border-radius: 0 4px 4px 0;
  }
  .cal_line_start.cal_line_end {
    border-radius: 4px;
  } */
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
  dateCount: number; // 1 ~ 30 or 1 ~ 31
  day: number; // 0 ~ 6
}

export const CalendarBar = styled.div`
  position: absolute;
  top: 56px; // 30px + 26px -> 기본 값
  left: ${({ day }: Bar) => css`calc(100% / 7 * ${day})`};
  width: ${({ dateCount }: Bar) => css`calc(100% / 7 * ${dateCount})`};
  height: 15px;
  line-height: 15px;
  border: 1.5px solid red;
  font-size: 8px;
  box-sizing: border-box;
`;

export const CalendarSettingMonthWrap = styled.h1``;

export const CalendarSettingMonth = styled.span``;

export const CalendarSettingButtonWrap = styled.div``;

export const CalendarSettingButton = styled.button``;

export const CalendarSettingSelectedWrap = styled.div``;

export const CalendarSettingSelectedDateWrap = styled.p``;

export const CalendarSettingSelectedDate = styled.span``;
