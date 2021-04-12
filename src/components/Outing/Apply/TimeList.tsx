import React, { FC, MouseEvent, useMemo } from "react";

import * as S from "../style";

interface Props {
  time: string;
  onHour: (e: MouseEvent<HTMLLIElement>) => void;
  onMin: (e: MouseEvent<HTMLLIElement>) => void;
}

const TimeList: FC<Props> = ({ time, onHour, onMin }) => {
  const displayHours = useMemo(() => {
    const hours = ["4", "5", "6", "7", "8"];

    return hours.map(hour => (
      <li
        key={hour}
        data-hour={hour}
        onClick={onHour}
        className={time.split(":")[0] === hour ? "selected" : ""}
      >
        {hour}
      </li>
    ));
  }, [time]);

  const displayMins = useMemo(() => {
    const mins = ["00", "10", "20", "30", "40", "50"];

    return mins.map(min => (
      <li
        key={min}
        data-min={min}
        onClick={onMin}
        className={time.split(":")[1] === min ? "selected" : ""}
      >
        {min}
      </li>
    ));
  }, [time]);

  return (
    <S.TimeList>
      <ul>
        <li>시</li>
        {displayHours}
      </ul>
      <ul>
        <li>분</li>
        {displayMins}
      </ul>
    </S.TimeList>
  );
};

export default TimeList;
