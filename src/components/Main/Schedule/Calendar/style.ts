import styled from 'styled-components';

export const Calendar = styled.div`
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
  height: 60px;
  padding: 4px 8px;
  font-size: 12px;
`;

export const CalendarDate = styled(CalendarDTemp)`
  color: black;
  cursor: pointer;
  box-sizing: border-box;
  &.prev,
  &.next {
    color: rgba(0, 0, 0, 20%);
    cursor: default;
  }
  &.curr:hover {
    background-color: #e9e9e9;
  }
  &.selected {
    border: 1.5px solid #5323b2;
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

export const CalendarDaySpan = styled.span``;

export const CalendarSetting = styled.div`
  text-align: center;
`;

export const CalendarSettingMonthWrap = styled.h1``;

export const CalendarSettingMonth = styled.span``;

export const CalendarSettingButtonWrap = styled.div`
  margin: 16px 0;
`;

export const CalendarSettingButton = styled.button`
  margin: 0 8px;
  padding: 8px 32px;
  border-radius: 16px;
  color: white;
  background-color: red;
  font-size: 24px;
  box-shadow: -3px -3px 3px #ffffff, inset 0 0 5px #ffffff;
`;

export const CalendarSettingSelectedWrap = styled.div`
  margin: 4px 0;
`;

export const CalendarSettingSelectedDateWrap = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const CalendarSettingSelectedDate = styled.span`
  color: #646464;
`;
