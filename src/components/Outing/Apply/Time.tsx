import React, { FC, ReactElement, useCallback } from "react";

import * as S from "../style";
import { ApplyState } from "../../../lib/hooks/useApplyState";

interface Props {
  applyState: ApplyState;
}

const ApplyTime: FC<Props> = ({ applyState }): ReactElement => {
  const { startTime, endTime, handleStartTime, handleEndTime } = applyState;

  const getTimeText = useCallback((type: string, time: string) => {
    if (!time) return `${type} 시간을 선택하세요`;
    if (time >= "12:00")
      return `오후 ${+time.split(":")[0] - 12}:${time.split(":")[1]}`;
    return `오전 ${time}`;
  }, []);

  return (
    <S.FormTime>
      <S.FormTimeListWrap>
        <S.ApplyFormItemTitle htmlFor="outTime">외출 시간</S.ApplyFormItemTitle>
        <S.ApplyFormInputWrap>
          <S.FormTimeType className={startTime ? "selected" : ""}>
            {getTimeText("외출", startTime)}
          </S.FormTimeType>
          <S.FormTimeInput
            type="time"
            name="date-time"
            id="startTime"
            onChange={handleStartTime}
          />
        </S.ApplyFormInputWrap>
      </S.FormTimeListWrap>
      <S.FormTimeListWrap>
        <S.ApplyFormItemTitle htmlFor="inTime">귀교 시간</S.ApplyFormItemTitle>
        <S.ApplyFormInputWrap>
          <S.FormTimeType className={endTime ? "selected" : ""}>
            {getTimeText("귀교", endTime)}
          </S.FormTimeType>
          <S.FormTimeInput
            type="time"
            name="date-time"
            id="endTime"
            onChange={handleEndTime}
          />
        </S.ApplyFormInputWrap>
      </S.FormTimeListWrap>
    </S.FormTime>
  );
};

export default ApplyTime;
