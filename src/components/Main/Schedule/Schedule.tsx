import React, { FC, ReactElement, useState } from 'react';

import * as S from '../style';
import Calendar from './Calendar/Calendar';

import { arrow } from '../../../assets/main';
import { Schedule as ISchedule } from '../../../containers/Main/MainContainer';

interface Props {
  schedules: ISchedule[];
}

const Schedule: FC<Props> = ({ schedules }): ReactElement => {
  const [today, setToday] = useState<Date>(new Date());

  const onClickNextMonth = () => {
    setToday((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const onClickPrevMonth = () => {
    setToday((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const getLocalDate = (date: Date) =>
    `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

  return (
    <S.Schedule>
      <S.ScheduleHeader>
        <S.MainContentTitleCommon>학사일정</S.MainContentTitleCommon>
        <S.ScheduleHeaderDateSetting>
          <span>{getLocalDate(new Date())}</span>
          <S.ScheduleArrow
            src={arrow}
            alt="prevMonth"
            title="prevMonth"
            onClick={onClickPrevMonth}
          />
          <S.ScheduleArrow
            src={arrow}
            alt="nextMonth"
            title="nextMonth"
            onClick={onClickNextMonth}
          />
        </S.ScheduleHeaderDateSetting>
      </S.ScheduleHeader>
      <Calendar today={today} schedules={schedules} />
    </S.Schedule>
  );
};

export default Schedule;
