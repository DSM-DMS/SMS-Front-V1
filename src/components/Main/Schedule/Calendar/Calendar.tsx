import React from 'react';

import * as S from './style';
import CalendarDate from './CalendarDate';
import CalendarDay from './CalendarDay';

import { Schedule as ISchedule } from '../../../../containers/Main/MainContainer';

interface Props {
  today: Date;
  schedules: ISchedule[];
}

const Calendar: React.FC<Props> = ({ today, schedules }) => {
  return (
    <S.Calendar>
      <CalendarDay />
      <CalendarDate today={today} schedules={schedules} />
    </S.Calendar>
  );
};

export default Calendar;
