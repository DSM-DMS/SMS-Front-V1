import React, { ChangeEvent, FC, memo, ReactElement } from "react";

import ApplyTimeInput from "./TimeInput";

import * as S from "../style";

interface Props {
  outTime: string;
  inTime: string;
  onChangeOut: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeIn: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ApplyTime: FC<Props> = ({
  outTime,
  inTime,
  onChangeOut,
  onChangeIn
}): ReactElement => {
  return (
    <S.FormTime>
      <ApplyTimeInput type="외출" time={outTime} onChange={onChangeOut} />
      <ApplyTimeInput type="귀교" time={inTime} onChange={onChangeIn} />
    </S.FormTime>
  );
};

export default memo(ApplyTime);
