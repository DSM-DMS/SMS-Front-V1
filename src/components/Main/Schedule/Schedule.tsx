import React, { FC, ReactElement } from "react";

import Calendar from "./Calendar/Calendar";

import * as S from "../style";

import useScheduleState from "../../../lib/hooks/useScheduleState";

interface Props {}

const Schedule: FC<Props> = (): ReactElement => {
  const [
    onClickNextMonth,
    onClickPrevMonth,
    localDateString
  ] = useScheduleState();

  return (
    <S.Schedule>
      <S.ScheduleHeader>
        <S.MainContentTitleCommon>학사일정</S.MainContentTitleCommon>
        <S.ScheduleHeaderDateSetting>
          <S.TimetableChangerLeft onClick={onClickPrevMonth} />
          <span>{localDateString}</span>
          <S.TimetableChangerRight onClick={onClickNextMonth} />
        </S.ScheduleHeaderDateSetting>
      </S.ScheduleHeader>
      <Calendar />
    </S.Schedule>
  );
};

export default Schedule;
