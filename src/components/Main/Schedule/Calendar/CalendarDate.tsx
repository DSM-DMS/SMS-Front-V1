import React, { ReactElement, useMemo } from 'react';

import * as S from './style';

interface Props {
  today: Date;
}

const CalendarDate: React.FC<Props> = ({ today }) => {
  const getDateHTML = (
    styling: string = '',
    children: number = 0,
    id: string = '',
  ): ReactElement => (
    <S.CalendarDate key={id} className={styling}>
      <S.CalendarDaySpan>{children ? children : ''}</S.CalendarDaySpan>
    </S.CalendarDate>
  );

  const setFixDayCount = (num: number): string =>
    num < 10 ? `0${num}` : `${num}`;

  const setCalendarData = (
    yearCopy: number,
    monthCopy: number,
  ): ReactElement[] => {
    const fixedMonth: string = setFixDayCount(monthCopy);
    const lastDay: number = new Date(yearCopy, +fixedMonth, 0).getDate();
    const firstDayName: number = new Date(
      yearCopy,
      +fixedMonth - 1,
      1,
    ).getDay();
    const calJSX: ReactElement[] = [];
    const prevLastDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      0,
    ).getDate();
    let startDayCount: number = 1;
    let nextMonDayCount: number = 1;

    for (let i = 0; i < 6; i += 1) {
      for (let j = 0; j < 7; j += 1) {
        if (i === 0 && j < firstDayName) {
          calJSX.push(
            getDateHTML('prev', prevLastDay - (firstDayName - 1) + j, `${j}`),
          );
        } else if (i >= 0 && startDayCount <= lastDay) {
          calJSX.push(
            getDateHTML(
              'month',
              startDayCount,
              `${yearCopy}-${fixedMonth}-${setFixDayCount(startDayCount)}`,
            ),
          );
          startDayCount += 1;
        } else {
          console.log(nextMonDayCount, startDayCount);
          calJSX.push(
            getDateHTML(
              'month',
              nextMonDayCount,
              `${yearCopy}-${fixedMonth + 1}-${setFixDayCount(
                nextMonDayCount,
              )}`,
            ),
          );
          nextMonDayCount += 1;
        }
      }
    }

    return calJSX;
  };

  const memoizedCalendar = useMemo<ReactElement[]>(
    () => setCalendarData(today.getFullYear(), today.getMonth() + 1),
    [today],
  );
  return <>{memoizedCalendar}</>;
};

export default CalendarDate;
