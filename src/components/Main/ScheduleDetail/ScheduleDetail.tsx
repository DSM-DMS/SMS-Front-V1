import React, { FC, memo, ReactElement } from "react";

import * as S from "../style";
import { Loading } from "../../default";
import { padNum } from "../../../lib/utils";
import useCustomSelector from "../../../lib/hooks/useCustomSelector";

interface Props {}

const date = new Date();
const fixedDate = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
  9
);

const getLocalDate = (dateNum: number) => {
  const date = new Date(dateNum);

  return `${padNum(date.getMonth() + 1)}.${padNum(date.getDate())}`;
};

const ScheduleDetail: FC<Props> = (): ReactElement => {
  const {
    main: { schedules, scheduleLoading, selectedDate }
  } = useCustomSelector();

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
      <S.DetailBody>
        {scheduleLoading ? (
          <S.DetailLoadingWrap>
            <Loading size="100px" />
          </S.DetailLoadingWrap>
        ) : (
          schedules.map(
            ({ detail, start_date: s, end_date: e, schedule_uuid: uuid }) => {
              const selectedTime = new Date(selectedDate).getTime();
              const isPrev = +fixedDate > e;

              if (selectedDate) {
                if (s <= selectedTime && selectedTime <= e) {
                  return (
                    <S.DetailBodyItem
                      key={uuid}
                      className={isPrev ? "prev" : ""}
                    >
                      <S.DetailBodyItemData>{detail}</S.DetailBodyItemData>
                      <S.DetailBodyItemData>
                        {s === e
                          ? getLocalDate(s)
                          : `${getLocalDate(s)} - ${getLocalDate(e)}`}
                      </S.DetailBodyItemData>
                    </S.DetailBodyItem>
                  );
                }

                return null;
              }

              return (
                <S.DetailBodyItem key={uuid} className={isPrev ? "prev" : ""}>
                  <S.DetailBodyItemData>{detail}</S.DetailBodyItemData>
                  <S.DetailBodyItemData>
                    {s === e
                      ? getLocalDate(s)
                      : `${getLocalDate(s)} - ${getLocalDate(e)}`}
                  </S.DetailBodyItemData>
                </S.DetailBodyItem>
              );
            }
          )
        )}
      </S.DetailBody>
    </S.ScheduleDetail>
  );
};

export default memo(ScheduleDetail);
