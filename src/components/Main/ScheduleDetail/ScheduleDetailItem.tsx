import React, { FC } from "react";

import * as S from "../style";
import { padNum } from "../../../lib/utils";

interface Props {
  isPrev: boolean;
  detail: string;
  start: number;
  end: number;
}

const getLocalDate = (dateNum: number) => {
  const date = new Date(dateNum);

  return `${padNum(date.getMonth() + 1)}.${padNum(date.getDate())}`;
};

const ScheduleDetailItem: FC<Props> = ({ isPrev, detail, start, end }) => {
  return (
    <S.DetailBodyItem className={isPrev ? "prev" : ""}>
      <S.DetailBodyItemData>{detail}</S.DetailBodyItemData>
      <S.DetailBodyItemData>
        {start === end
          ? getLocalDate(start)
          : `${getLocalDate(start)} - ${getLocalDate(end)}`}
      </S.DetailBodyItemData>
    </S.DetailBodyItem>
  );
};

export default ScheduleDetailItem;
