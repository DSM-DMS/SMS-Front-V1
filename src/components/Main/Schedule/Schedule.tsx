import React, { FC, ReactElement, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Calendar from "./Calendar/Calendar";

import * as S from "../style";
import { MainArrow } from "../../../assets";
import { getSchedulesSaga } from "../../../modules/action/main";

interface Props {}

const Schedule: FC<Props> = (): ReactElement => {
  const dispatch = useDispatch();
  const [schedulerDate, setSchedulerDate] = useState<Date>(new Date());

  const onClickNextMonth = () => {
    setSchedulerDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  const onClickPrevMonth = () => {
    setSchedulerDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1));
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
      <Calendar today={schedulerDate} />
    </S.Schedule>
  );
};

export default Schedule;
