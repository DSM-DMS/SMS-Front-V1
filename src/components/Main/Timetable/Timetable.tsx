import React, { FC, ReactElement, useState, useRef, useEffect } from "react";

import * as S from "../style";
import { MainChangeTable } from "../../../assets";
import { ResTimeTable } from "../../../lib/api/payloads/Main";
import TimeTableList from "./TimeTableList";
import { getTimeTable } from "../../../lib/api/Main";

interface Props {}

enum Day {
  "월" = 0,
  "화" = 1,
  "수" = 2,
  "목" = 3,
  "금" = 4
}

const filterDays = [
  {
    id: "day1",
    day: "월"
  },
  {
    id: "day2",
    day: "화"
  },
  {
    id: "day3",
    day: "수"
  },
  {
    id: "day4",
    day: "목"
  },
  {
    id: "day5",
    day: "금"
  }
];

const Timetable: FC<Props> = (): ReactElement => {
  const today = new Date().getDay() - 1;
  const [timeTables, setTimeTables] = useState<ResTimeTable[]>([]);
  const [timeTable, setTimeTable] = useState<ResTimeTable>(null);
  const [weekNum, setWeekNum] = useState<number>(today);
  const resetRef = useRef<HTMLImageElement>(null);

  const resetFn = () => {
    handleDay(today);

    resetRef.current.classList.add("rolling");
    setTimeout(() => {
      resetRef.current.classList.remove("rolling");
    }, 1000);
  };

  const classes = (i: number) => {
    return `${i === today ? "today" : ""} ${i === weekNum ? "selected" : ""}`;
  };

  const handleDay = (i: number) => {
    setWeekNum(i);
    setTimeTable(timeTables[i]);
  };

  const initTimeTables = async () => {
    try {
      const res = await Promise.all([
        getTimeTable(1),
        getTimeTable(2),
        getTimeTable(3),
        getTimeTable(4),
        getTimeTable(5)
      ]);
      const mapping = res.map(({ data }) => data);

      setTimeTables(mapping);
      setTimeTable(mapping[today]);
    } catch (err) {}
  };

  useEffect(() => {
    initTimeTables();
  }, []);

  return (
    <S.Timetable>
      <S.TimetableTitle>
        <span>우리반 {Day[weekNum]}요일 시간표</span>
        <S.FiltersWrap>
          <S.FilterReset>
            <img
              ref={resetRef}
              onClick={resetFn}
              src={MainChangeTable}
              title="reset"
              alt="reset"
            />
          </S.FilterReset>
          {filterDays.map(({ id, day }, i) => (
            <S.FilterDayWrap
              htmlFor={id}
              key={id}
              className={classes(i)}
              onClick={() => handleDay(i)}
            >
              <S.FilterText>{day}</S.FilterText>
              <S.FilterRadio className={i === weekNum ? "selected" : ""} />
            </S.FilterDayWrap>
          ))}
        </S.FiltersWrap>
      </S.TimetableTitle>
      <TimeTableList timeTable={timeTable} />
    </S.Timetable>
  );
};

export default Timetable;
