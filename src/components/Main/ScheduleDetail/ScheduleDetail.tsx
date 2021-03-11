import React, { FC, memo, ReactElement } from "react";
import { useSelector } from "react-redux";

import * as S from "../style";
import { stateType } from "../../../modules/reducer";
import { UserType } from "../../../modules/action/header";
import { Loading } from "../../default";
import { padNum } from "../../../lib/utils";

interface Props {}

const date = new Date();
const fixedDate = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
  9
);

const ScheduleDetail: FC<Props> = (): ReactElement => {
  const {
    main: { schedules, scheduleLoading },
    header: { type }
  } = useSelector((state: stateType) => state);

  const getLocalDate = (dateNum: number) => {
    const date = new Date(dateNum);

    return `${padNum(date.getMonth() + 1)}.${padNum(date.getDate())}`;
  };

  return (
    <S.ScheduleDetail>
      <S.DetailHeader>
        <S.DetailHeaderTop>
          <S.DetailTitle>세부내용</S.DetailTitle>
        </S.DetailHeaderTop>
        <S.DetailHead>
          <S.DetailHeadData>일정</S.DetailHeadData>
          <S.DetailHeadData>날짜</S.DetailHeadData>
        </S.DetailHead>
      </S.DetailHeader>
      <S.DetailBody type={type as UserType}>
        {scheduleLoading ? (
          <S.DetailLoadingWrap>
            <Loading size="100px" />
          </S.DetailLoadingWrap>
        ) : (
          schedules.map(({ detail, start_date, end_date, schedule_uuid }) => {
            return (
              <S.DetailBodyItem
                key={schedule_uuid}
                className={+fixedDate > end_date ? "prev" : ""}
              >
                <S.DetailBodyItemData>{detail}</S.DetailBodyItemData>
                <S.DetailBodyItemData>
                  {start_date === end_date
                    ? getLocalDate(start_date)
                    : `${getLocalDate(start_date)} - ${getLocalDate(end_date)}`}
                </S.DetailBodyItemData>
              </S.DetailBodyItem>
            );
          })
        )}
      </S.DetailBody>
    </S.ScheduleDetail>
  );
};

export default memo(ScheduleDetail);
