import React, {
  FC,
  ReactElement,
  useState,
  useEffect,
  useMemo,
  ChangeEvent
} from "react";
import { useDispatch, useSelector } from "react-redux";

import TimetableList from "./TimetableList";

import * as S from "../style";
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
  const [timetableDate, setTimetableDate] = useState<number[]>(
    date
      .toLocaleDateString()
      .split(" ")
      .map(a => +a.slice(0, a.length - 1))
  );

  const getMinLocalDate = useMemo(() => {
    const t = date;
    return `${t.getFullYear()}-${t.getMonth() + 1}-01`;
  }, []);

  const getMaxLocalDate = useMemo(() => {
    const t = date;
    const d = new Date(t.getFullYear(), t.getMonth() + 1, 0);
    return `${t.getFullYear()}-${t.getMonth() + 1}-${d.getDate()}`;
  }, []);

  const handleTimetableDate = (e: ChangeEvent<HTMLInputElement>) => {
    const splitDate = e.target.value.split("-").map(d => +d);
    setTimetableDate(splitDate);
  };

  const handleSelectTimetable = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedDate = +e.target.value;

    setTimetableDate([date.getFullYear(), date.getMonth() + 1, selectedDate]);
  };

  useEffect(() => {
    if (type === STUDENT) {
      dispatch(
        getTimetablesSaga(timetableDate[0], timetableDate[1], timetableDate[2])
      );
    }
  }, [timetableDate, type]);

  return (
    <S.Timetable>
      <S.TimetableTitle>
        <span>
          우리반 {timetableDate[1]}월 {timetableDate[2]}일 시간표
        </span>
        <S.FiltersWrap>
          <S.TimetableSelector
            name="date"
            id="date"
            onChange={handleSelectTimetable}
            defaultValue={date.getDate()}
          >
            {Array(
              new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
            )
              .fill(0)
              .map((_, i) => (
                <option key={i}>{i + 1}</option>
              ))}
          </S.TimetableSelector>
          <span>일</span>
        </S.FiltersWrap>
      </S.TimetableTitle>
      <TimetableList timetable={timetable} />
    </S.Timetable>
  );
};

export default Timetable;
