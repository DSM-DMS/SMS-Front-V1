import React, { FC, ReactElement, ChangeEvent, useCallback } from "react";

import * as S from "../style";

interface Props {
  formOutTime: string;
  formInTime: string;
  handleOutTime: (e: ChangeEvent<HTMLInputElement>) => void;
  handleInTime: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ApplyTime: FC<Props> = ({
  formOutTime,
  formInTime,
  handleInTime,
  handleOutTime
}): ReactElement => {
  const getTimeText = useCallback((type: string, time: string) => {
    if (!time) return `${type} 시간을 선택하세요.`;
    if (time >= "12:00")
      return `오후 ${parseInt(time.split(":")[0]) - 12}:${time.split(":")[1]}`;
    return `오전 ${time}`;
  }, []);

  return (
    <S.FormTime>
      <S.FormTimeListWrap>
        <S.ApplyFormItemTitle htmlFor="outTime">외출 시간</S.ApplyFormItemTitle>
        <S.ApplyFormInputWrap>
          <S.FormTimeType className={formOutTime ? "selected" : ""}>
            {getTimeText("외출", formOutTime)}
          </S.FormTimeType>
          <S.FormTimeInput
            type="time"
            name="date-time"
            id="outTime"
            max="15:00"
            onChange={handleOutTime}
          />
        </S.ApplyFormInputWrap>
      </S.FormTimeListWrap>
      <S.FormTimeListWrap>
        <S.ApplyFormItemTitle htmlFor="inTime">귀교 시간</S.ApplyFormItemTitle>
        <S.ApplyFormInputWrap>
          <S.FormTimeType className={formInTime ? "selected" : ""}>
            {getTimeText("귀교", formInTime)}
          </S.FormTimeType>
          <S.FormTimeInput
            type="time"
            name="date-time"
            id="inTime"
            min="13:00"
            onChange={handleInTime}
          />
        </S.ApplyFormInputWrap>
      </S.FormTimeListWrap>
    </S.FormTime>
  );
};

export default ApplyTime;
