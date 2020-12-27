import React, { FC, ReactElement, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TimetableList from "./TimetableList";

import * as S from "../style";
import { SearchIcon } from "../../../assets";
import { stateType } from "../../../modules/reducer";
import { getTimetablesSaga } from "../../../modules/action/main";
import { STUDENT } from "../../../modules/action/header";

interface Props {}

const date = new Date();

const Timetable: FC<Props> = (): ReactElement => {
  const dispatch = useDispatch();
  const {
    main: { timetable },
    header: { type }
  } = useSelector((state: stateType) => state);
  const [tDate, setTDate] = useState<number>(date.getDate());

  const handleNextTimetable = () => {
    const currLastDate = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    if (tDate === currLastDate) {
      return alert("이번 달 안에서만 시간표 변경이 가능합니다.");
    }
    setTDate(prev => prev + 1);
  };

  const handlePrevTimetable = () => {
    if (tDate === 1) {
      return alert("이번 달 안에서만 시간표 변경이 가능합니다.");
    }
    setTDate(prev => prev - 1);
  };

  useEffect(() => {
    if (type === STUDENT) {
      dispatch(
        getTimetablesSaga(date.getFullYear(), date.getMonth() + 1, tDate)
      );
    }
  }, [tDate, type]);

  return (
    <S.Timetable>
      <S.TimetableTitle>
        <S.FiltersWrap>
          <S.TimetableSelector onClick={handlePrevTimetable}>
            <S.TimetableChangerLeft />
          </S.TimetableSelector>
          <span>
            {date.getMonth() + 1}/{tDate}
          </span>
          <S.TimetableSelector onClick={handleNextTimetable}>
            <S.TimetableChangerRight />
          </S.TimetableSelector>
        </S.FiltersWrap>
      </S.TimetableTitle>
      <TimetableList timetable={timetable} />
    </S.Timetable>
  );
};

export default Timetable;
