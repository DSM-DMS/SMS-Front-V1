import React, { FC, ReactElement, useState } from "react";

import Calendar from "./Calendar/Calendar";

import * as S from "../style";
import { MainArrow } from "../../../assets";

interface Props {}

const Schedule: FC<Props> = (): ReactElement => {
  const [today, setToday] = useState<Date>(new Date());

  const onClickNextMonth = () => {
    setToday(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const onClickPrevMonth = () => {
    setToday(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const getLocalDate = (date: Date) => {
    return `${date.getFullYear()}.${date.getMonth() + 1}`;
  };

  return (
    <S.Schedule>
      <S.ScheduleHeader>
        <S.MainContentTitleCommon>학사일정</S.MainContentTitleCommon>
        <S.ScheduleHeaderDateSetting>
          <span>{getLocalDate(today)}</span>
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
      <Calendar today={today} />
    </S.Schedule>
  );
};

export default Schedule;
