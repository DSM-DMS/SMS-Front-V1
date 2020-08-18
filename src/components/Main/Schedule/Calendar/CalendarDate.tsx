import React, { ReactElement, useMemo, MouseEvent } from 'react';

import * as S from './style';

interface Props {
  today: Date;
}

const CalendarDate: React.FC<Props> = ({ today }) => {
  const fixNum = (num: number): string => (num < 10 ? `0${num}` : String(num));

  const onClickDate = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.add('selected');
  };

  const getDateHTML = (
    styling: string = '',
    children: number = 0,
    id: string = '',
  ): ReactElement => (
    <S.CalendarDate key={id} className={styling} onClick={onClickDate}>
      <S.CalendarDaySpan>{children ? fixNum(children) : ''}</S.CalendarDaySpan>
    </S.CalendarDate>
  );

  const setCalendarData = (
    yearCopy: number,
    monthCopy: number,
  ): ReactElement[] => {
    const fixedMonth: string = fixNum(monthCopy);
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
              'curr',
              startDayCount,
              `${yearCopy}-${fixedMonth}-${fixNum(startDayCount)}`,
            ),
          );
          startDayCount += 1;
        } else {
          calJSX.push(
            getDateHTML(
              'next',
              nextMonDayCount,
              `${yearCopy}-${fixedMonth + 1}-${fixNum(nextMonDayCount)}`,
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
