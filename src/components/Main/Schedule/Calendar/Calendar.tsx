import React from 'react';

import * as S from './style';
import CalendarDate from './CalendarDate';
import CalendarDay from './CalendarDay';

interface Props {
  today: Date;
}

const Calendar: React.FC<Props> = ({ today }) => {
  return (
    <S.Calendar>
      <CalendarDay />
      <CalendarDate today={today} />
    </S.Calendar>
  );
};

export default Calendar;
