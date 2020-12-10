import React, { FC } from "react";

import * as S from "../style";
import { ResTimeTable } from "../../../lib/api/payloads/Main";

interface Props {
  timeTable: ResTimeTable;
}

const TimeTableList: FC<Props> = ({ timeTable }) => {
  return (
    <S.TimetableList>
      <S.TimetableItem>
        <S.TimetableItemDate>1교시</S.TimetableItemDate>
        {timeTable?.time1}
      </S.TimetableItem>
      <S.TimetableItem>
        <S.TimetableItemDate>2교시</S.TimetableItemDate>
        {timeTable?.time2}
      </S.TimetableItem>
      <S.TimetableItem>
        <S.TimetableItemDate>3교시</S.TimetableItemDate>
        {timeTable?.time3}
      </S.TimetableItem>
      <S.TimetableItem>
        <S.TimetableItemDate>4교시</S.TimetableItemDate>
        {timeTable?.time4}
      </S.TimetableItem>
      <S.TimetableItem>
        <S.TimetableItemDate>5교시</S.TimetableItemDate>
        {timeTable?.time5}
      </S.TimetableItem>
      <S.TimetableItem>
        <S.TimetableItemDate>6교시</S.TimetableItemDate>
        {timeTable?.time6}
      </S.TimetableItem>
      <S.TimetableItem>
        <S.TimetableItemDate>7교시</S.TimetableItemDate>
        {timeTable?.time7}
      </S.TimetableItem>
    </S.TimetableList>
  );
};

export default TimeTableList;
