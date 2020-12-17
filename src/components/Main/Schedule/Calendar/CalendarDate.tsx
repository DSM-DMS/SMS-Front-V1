import React, { ReactElement, useMemo, MouseEvent } from "react";
import { useSelector } from "react-redux";

import * as S from "./style";

import { stateType } from "../../../../modules/reducer";
import { UserType } from "../../../../modules/action/header";

interface Props {}

const CalendarDate: React.FC<Props> = () => {
  const {
    main: { schedulerDate, schedules },
    header: { type }
  } = useSelector((state: stateType) => state);

  const printCalendar = (
    yearCopy: number,
    monthCopy: number
  ): ReactElement[] => {
    const fixedMonth: string = padNum(monthCopy),
      lastDay: number = new Date(yearCopy, monthCopy - 1, 0).getDate(),
      firstDayName: number = new Date(yearCopy, monthCopy - 1, 1).getDay(),
      calJSX: ReactElement[] = [];
    let startDayCount: number = 1;
    let nextDayCount: number = 1;

    for (let i = 0; i < 6; i += 1) {
      for (let j = 0; j < 7; j += 1) {
        if (i === 0 && j < firstDayName) {
          calJSX.push(getDateJSX(lastDay - (firstDayName - 1) + j, `${j}`));
        } else if (i >= 0 && startDayCount <= lastDay) {
          const date = `${yearCopy}-${fixedMonth}-${padNum(startDayCount)}`,
            t = new Date(),
            y = t.getFullYear(),
            m = t.getMonth() + 1,
            d = t.getDate();
          date === `${y}-${padNum(m)}-${padNum(d)}`
            ? calJSX.push(getDateJSX(startDayCount, date, "curr today"))
            : calJSX.push(getDateJSX(startDayCount, date, "curr"));
          startDayCount += 1;
        } else {
          const date: string =
            +fixedMonth + 1 > 12
              ? `${+yearCopy + 1}-${1}-${padNum(nextDayCount)}`
              : `${yearCopy}-${+fixedMonth + 1}-${padNum(nextDayCount)}`;
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
      <S.CalendarDaySpan>{children && padNum(children)}</S.CalendarDaySpan>
    </S.CalendarDate>
  );

  const padNum = (num: number): string => (num < 10 ? `0${num}` : num + "");

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

  const setScheduleData = useMemo(() => {
    // const { end_date, start_date, detail } = schedules[0];
    // const date = new Date();
    // const start = new Date(`${date.getFullYear()}.${start_date}`);
    // const end = new Date(`${date.getFullYear()}.${end_date}`);
    // const day: number = new Date(
    //   `${date.getFullYear()}.${start_date}`
    // ).getDay();
    // const SEC_OF_DAY = 86400 * 1000;
    // const dateCount = (end.getTime() - start.getTime()) / SEC_OF_DAY || 1;
    // end_date - start_date;
    // let level = 1;

    return (
      <S.CalendarBar dateCount={1} day={2}>
        {/* {} */}
      </S.CalendarBar>
    );
  }, []);

  return (
    <>
      {memoizedCalendar}
      {/* {setScheduleData} */}
    </>
  );
};

export default CalendarDate;
