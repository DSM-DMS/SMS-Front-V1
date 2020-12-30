import React, { useMemo } from "react";

import * as S from "./style";

interface Props {}

const CalendarDay: React.FC<Props> = () => {
  const setCalendarDay = useMemo(() => {
    const dayArr: string[] = ["일", "월", "화", "수", "목", "금", "토"],
      dayJsx = dayArr.map((day, i) => (
        <S.CalendarDay
          className={i === new Date().getDay() ? "dayOfWeek" : ""}
          key={day}
        >
          <S.CalendarDaySpan>{day}</S.CalendarDaySpan>
        </S.CalendarDay>
      ));
    return dayJsx;
  }, []);

  return <>{setCalendarDay}</>;
};

export default CalendarDay;
