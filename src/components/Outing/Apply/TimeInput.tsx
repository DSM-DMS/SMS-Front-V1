import React, {
  FC,
  MouseEvent,
  ReactElement,
  useCallback,
  useMemo
} from "react";

import * as S from "../style";
import { Clock } from "../../../assets";
import TimeList from "./TimeList";

interface Props {
  type: string;
  time: string;
  handleHour: (value: string) => void;
  handleMin: (value: string) => void;
}

const ApplyTimeInput: FC<Props> = ({
  type,
  time,
  handleHour,
  handleMin
}): ReactElement => {
  const getTimeText = useMemo(() => {
    if (time === ":") return `${type} 시간을 선택하세요`;
    return `오후 ${time}`;
  }, [type, time]);

  const onHour = useCallback(
    (e: MouseEvent<HTMLLIElement>) => {
      handleHour(e.currentTarget.dataset.hour);
    },
    [time]
  );

  const onMin = useCallback(
    (e: MouseEvent<HTMLLIElement>) => {
      handleMin(e.currentTarget.dataset.min);
    },
    [time]
  );

  return (
    <S.FormTimeListWrap>
      <S.ApplyFormItemTitle>{type} 시간</S.ApplyFormItemTitle>
      <S.ApplyFormInputWrap>
        <S.FormTimeType className={time !== ":" ? "selected" : ""}>
          {getTimeText}
        </S.FormTimeType>
        <S.TimeBtn>
          <TimeList time={time} onHour={onHour} onMin={onMin} />
          <img src={Clock} alt="clock" title="clock" />
        </S.TimeBtn>
      </S.ApplyFormInputWrap>
    </S.FormTimeListWrap>
  );
};

export default ApplyTimeInput;
