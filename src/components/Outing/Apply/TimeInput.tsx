import React, { ChangeEvent, FC, ReactElement, useMemo } from "react";

import * as S from "../style";

interface Props {
  type: string;
  time: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ApplyTimeInput: FC<Props> = ({ type, time, onChange }): ReactElement => {
  const getTimeText = useMemo(() => {
    if (time === "") return `${type} 시간을 선택하세요`;

    return time;
  }, [type, time]);

  return (
    <S.FormTimeListWrap>
      <S.ApplyFormItemTitle>{type} 시간</S.ApplyFormItemTitle>
      <S.ApplyFormInputWrap>
        <S.FormTimeType className={time === "" ? "" : "selected"}>
          {getTimeText}
        </S.FormTimeType>
        <S.FormTimeInput type="time" onChange={onChange} />
      </S.ApplyFormInputWrap>
    </S.FormTimeListWrap>
  );
};

export default ApplyTimeInput;
