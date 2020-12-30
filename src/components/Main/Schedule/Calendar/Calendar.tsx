import React from "react";

import * as S from "./style";
import CalendarDate from "./CalendarDate";
import CalendarDay from "./CalendarDay";

interface Props {}

const Calendar: React.FC<Props> = () => {
  return (
    <S.Calendar>
      <CalendarDay />
      <CalendarDate />
    </S.Calendar>
  );
};

export default Calendar;
