import React, { FC, ReactElement } from "react";

import ApplyTimeInput from "./TimeInput";

import * as S from "../style";
import { ApplyState } from "../../../lib/hooks/useApplyState";

interface Props {
  applyState: ApplyState;
}

const ApplyTime: FC<Props> = ({ applyState }): ReactElement => {
  const {
    values: { outTime, inTime },
    handlers: { handleOutHour, handleOutMin, handleInHour, handleInMin }
  } = applyState;

  return (
    <S.FormTime>
      <ApplyTimeInput
        type="외출"
        time={outTime}
        handleHour={handleOutHour}
        handleMin={handleOutMin}
      />
      <ApplyTimeInput
        type="귀교"
        time={inTime}
        handleHour={handleInHour}
        handleMin={handleInMin}
      />
    </S.FormTime>
  );
};

export default ApplyTime;
