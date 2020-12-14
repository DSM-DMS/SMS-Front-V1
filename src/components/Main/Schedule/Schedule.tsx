import React, { FC, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Calendar from "./Calendar/Calendar";

import * as S from "../style";
import { MainArrow } from "../../../assets";
import {
  getSchedulesSaga,
  setSchedulerDate
} from "../../../modules/action/main";
import { stateType } from "../../../modules/reducer";

interface Props {}

const Schedule: FC<Props> = (): ReactElement => {
  const dispatch = useDispatch();
  const { schedulerDate } = useSelector((state: stateType) => state.main);

  const onClickNextMonth = () => {
    const next = new Date(
      schedulerDate.getFullYear(),
      schedulerDate.getMonth() + 1
    );
    dispatch(setSchedulerDate(next));
  };

  const onClickPrevMonth = () => {
    const prev = new Date(
      schedulerDate.getFullYear(),
      schedulerDate.getMonth() - 1
    );
    dispatch(setSchedulerDate(prev));
  };

  const getLocalDate = (date: Date) =>
    `${date.getFullYear()}.${date.getMonth() + 1}`;

  useEffect(() => {
    const year = schedulerDate.getFullYear();
    const month = schedulerDate.getMonth() + 1;

    dispatch(getSchedulesSaga(year, month));
  }, [schedulerDate]);

  return (
    <S.Schedule>
      <S.ScheduleHeader>
        <S.MainContentTitleCommon>학사일정</S.MainContentTitleCommon>
        <S.ScheduleHeaderDateSetting>
          <span>{getLocalDate(schedulerDate)}</span>
          <S.ScheduleArrow
            src={MainArrow}
            alt="prevMonth"
            title="prevMonth"
            onClick={onClickPrevMonth}
          />
          <S.ScheduleArrow
            src={MainArrow}
            alt="nextMonth"
            title="nextMonth"
            onClick={onClickNextMonth}
          />
        </S.ScheduleHeaderDateSetting>
      </S.ScheduleHeader>
      <Calendar />
    </S.Schedule>
  );
};

export default Schedule;
