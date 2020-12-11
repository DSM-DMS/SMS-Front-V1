import React, { FC, ReactElement, useState, useRef, useEffect } from "react";

import TimetableList from "./TimetableList";

import * as S from "../style";
import { MainChangeTable } from "../../../assets";
import { ResTimetable } from "../../../lib/api/payloads/Main";
import { getTimetable } from "../../../lib/api/Main";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "../../../modules/reducer";

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
  const { timetables } = useSelector((state: stateType) => state.main);
  const [timetable, setTimetable] = useState<ResTimetable>(null);
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
    setTimetable(timetables[i]);
  };

  useEffect(() => {
    setTimetable(timetables[today]);
  }, [timetables]);

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
      <TimetableList
        timeTable={timetables.length === 1 ? timetables[0] : timetable}
      />
    </S.Timetable>
  );
};

export default Timetable;
