import React, { FC, ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import TimeTableList from "./TimeTableList";

import * as S from "../style";
import { getTimetablesSaga } from "../../../modules/action/main";
import useDidMountEffect from "../../../lib/hooks/useDidMountEffect";
import useCustomSelector from "../../../lib/hooks/useCustomSelector";

interface Props {}

const date = new Date();

const TimeTable: FC<Props> = (): ReactElement => {
  const dispatch = useDispatch();
  const {
    main: { timetable, timetableLoading }
  } = useCustomSelector();
  const [tDate, setTDate] = useState<number>(date.getDate());

  const handleNextTimetable = () => {
    const currLastDate = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    if (tDate === currLastDate) {
      toast.info("이번 달 안에서만 시간표 조회가 가능합니다.");
      return;
    }
    setTDate(prev => prev + 1);
  };

  const handlePrevTimetable = () => {
    if (tDate === 1) {
      toast.info("이번 달 안에서만 시간표 조회가 가능합니다.");
      return;
    }
    setTDate(prev => prev - 1);
  };

  useDidMountEffect(() => {
    dispatch(getTimetablesSaga(date.getFullYear(), date.getMonth() + 1, tDate));
  }, [tDate]);

  return (
    <S.Timetable>
      <S.TimetableTitle>
        <S.TimetableWhereFrom>
          * 해당 시간표는 나이스에서 제공되는 정보입니다.
        </S.TimetableWhereFrom>
        <S.FiltersWrap>
          <S.TimetableSelector aria-label="left" onClick={handlePrevTimetable}>
            <S.TimetableChangerLeft />
          </S.TimetableSelector>
          <span>
            {date.getMonth() + 1}/{tDate}
          </span>
          <S.TimetableSelector aria-label="right" onClick={handleNextTimetable}>
            <S.TimetableChangerRight />
          </S.TimetableSelector>
        </S.FiltersWrap>
      </S.TimetableTitle>
      <TimeTableList loading={timetableLoading} timetable={timetable} />
    </S.Timetable>
  );
};

export default TimeTable;
