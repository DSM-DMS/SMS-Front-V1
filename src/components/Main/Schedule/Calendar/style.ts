import styled from 'styled-components';

export const Calendar = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`;

export const CalendarDTemp = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% / 7);
  height: calc(100% / 6);
  font-weight: bold;
  font-size: 16px;
`;

export const CalendarDate = styled(CalendarDTemp)`
  border-radius: 50%;
  transition: 0.3s;
  color: black;
  font-size: 20px;
  cursor: pointer;
  &.prev {
    color: red;
    cursor: default;
  }
  &.between {
    color: white;
    background-color: #8d8d8d;
  }
  &.selected {
    background-color: blue;
    color: white;
  }
  .cal_line {
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
  }
`;

export const CalendarDaySpan = styled.span``;

export const CalendarDay = styled(CalendarDTemp)`
  color: rgb(75, 75, 75);
`;

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
