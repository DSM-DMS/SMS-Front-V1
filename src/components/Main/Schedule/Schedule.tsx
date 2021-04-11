import React, { FC, ReactElement, useCallback } from "react";
import { useDispatch } from "react-redux";

import Calendar from "./Calendar/Calendar";

import * as S from "../style";
import {
  getSchedulesSaga,
  setSchedulerDate
} from "../../../modules/action/main";
import { padNum } from "../../../lib/utils";
import useDidMountEffect from "../../../lib/hooks/useDidMountEffect";
import useCustomSelector from "../../../lib/hooks/useCustomSelector";

interface Props {}

const Schedule: FC<Props> = (): ReactElement => {
  const dispatch = useDispatch();
  const {
    main: { schedulerDate }
  } = useCustomSelector();

  const onClickNextMonth = () => {
    const next = new Date(
      schedulerDate.getFullYear(),
      schedulerDate.getMonth() + 1
    );
    dispatch(setSchedulerDate(next));
  };

  const onClickPrevMonth = () => {
    const prev = new Date(
      schedulerDate.getFullYear(),
      schedulerDate.getMonth() - 1
    );
    dispatch(setSchedulerDate(prev));
  };

  const getLocalDate = useCallback((date: Date) => {
    return `${date.getFullYear()}.${padNum(date.getMonth() + 1)}`;
  }, []);

  useDidMountEffect(() => {
    const year = schedulerDate.getFullYear();
    const month = schedulerDate.getMonth() + 1;

    dispatch(getSchedulesSaga(year, month));
  }, [schedulerDate]);

  return (
    <S.Schedule>
      <S.ScheduleHeader>
        <S.MainContentTitleCommon>학사일정</S.MainContentTitleCommon>
        <S.ScheduleHeaderDateSetting>
          <S.TimetableChangerLeft onClick={onClickPrevMonth} />
          <span>{getLocalDate(schedulerDate)}</span>
          <S.TimetableChangerRight onClick={onClickNextMonth} />
        </S.ScheduleHeaderDateSetting>
      </S.ScheduleHeader>
      <Calendar />
    </S.Schedule>
  );
};

export default Schedule;
