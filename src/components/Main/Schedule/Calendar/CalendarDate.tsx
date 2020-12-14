import React, { ReactElement, useMemo, MouseEvent } from "react";
import { useSelector } from "react-redux";

import * as S from "./style";

import { stateType } from "../../../../modules/reducer";
import { UserType } from "../../../../modules/action/header";

interface Props {}

const CalendarDate: React.FC<Props> = () => {
  const {
    main: { schedulerDate },
    header: { type }
  } = useSelector((state: stateType) => state);

  const printCalendar = (
    yearCopy: number,
    monthCopy: number
  ): ReactElement[] => {
    const fixedMonth: string = fixNum(monthCopy),
      lastDay: number = new Date(yearCopy, monthCopy, 0).getDate(),
      firstDayName: number = new Date(yearCopy, monthCopy - 1, 1).getDay(),
      calJSX: ReactElement[] = [];
    let startDayCount: number = 1;
    let nextDayCount: number = 1;

    for (let i = 0; i < 6; i += 1) {
      for (let j = 0; j < 7; j += 1) {
        if (i === 0 && j < firstDayName) {
          calJSX.push(getDateJSX(lastDay - (firstDayName - 1) + j, `${j}`));
        } else if (i >= 0 && startDayCount <= lastDay) {
          const date = `${yearCopy}-${fixedMonth}-${fixNum(startDayCount)}`,
            t = new Date(),
            y = t.getFullYear(),
            m = t.getMonth() + 1,
            d = t.getDate();
          date === `${y}-${fixNum(m)}-${fixNum(d)}`
            ? calJSX.push(getDateJSX(startDayCount, date, "curr today"))
            : calJSX.push(getDateJSX(startDayCount, date, "curr"));
          startDayCount += 1;
        } else {
          const date = `${yearCopy}-${fixedMonth + 1}-${fixNum(nextDayCount)}`;
          calJSX.push(getDateJSX(nextDayCount, date));
          nextDayCount += 1;
        }
      }
    }
    return calJSX;
  };

  const getDateJSX = (
    children: number = 0,
    id: string = "",
    styling: string = ""
  ): ReactElement => (
    <S.CalendarDate
      key={id}
      className={styling}
      onClick={styling.match("curr") ? onClickDate : () => {}}
      type={type as UserType}
    >
      <S.CalendarDaySpan>{children ? fixNum(children) : ""}</S.CalendarDaySpan>
    </S.CalendarDate>
  );

  const fixNum = (num: number): string => (num < 10 ? `0${num}` : String(num));

  const onClickDate = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.parentElement.childNodes.forEach(el => {
      (el as HTMLDivElement).classList.remove("selected");
    });
    e.currentTarget.classList.add("selected");
  };

  const memoizedCalendar = useMemo<ReactElement[]>(
    () =>
      printCalendar(schedulerDate.getFullYear(), schedulerDate.getMonth() + 1),
    [schedulerDate, type]
  );

  // const setScheduleData = useMemo(() => {
  //   const { endDate, schedule, startDate } = schedules[0];
  //   const date = new Date();
  //   const start = new Date(`${date.getFullYear()}.${startDate}`);
  //   const end = new Date(`${date.getFullYear()}.${endDate}`);
  //   const day: number = new Date(`${date.getFullYear()}.${startDate}`).getDay();
  //   const SEC_OF_DAY = 86400 * 1000;
  //   const dateCount: number =
  //     (end.getTime() - start.getTime()) / SEC_OF_DAY || 1;
  //   let level = 1;

  //   // console.log(startDate, endDate, day, dateCount, level);

  //   return (
  //     <S.CalendarBar dateCount={dateCount} day={day}>
  //       {schedule}
  //     </S.CalendarBar>
  //   );
  // }, []);

  return <>{memoizedCalendar}</>;
};

export default CalendarDate;
