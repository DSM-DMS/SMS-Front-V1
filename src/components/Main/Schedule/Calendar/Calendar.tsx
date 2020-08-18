import React, { useState } from 'react';

import * as S from './style';

import CalendarDate from './CalendarDate';
import CalendarDay from './CalendarDay';

interface Props {}

const Calendar: React.FC<Props> = () => {
  const [today, setToday] = useState<Date>(new Date());

  return (
    <S.Calendar>
      <CalendarDay />
      <CalendarDate today={today} />
    </S.Calendar>
  );
};

export default Calendar;
