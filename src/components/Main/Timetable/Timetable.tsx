import React, { FC, ReactElement } from 'react';

import * as S from '../style';

interface Props {}

const timeTable: string[] = [
  '성직',
  '체육',
  '문학',
  '영어',
  '임베디드 시스템',
  '임베디드 시스템',
  '수학',
];

const Timetable: FC<Props> = (): ReactElement => {
  const fixNum = (num: number): string => (num < 10 ? `0${num}` : String(num));

  return (
    <S.Timetable>
      <S.TimetableTitle>시간표</S.TimetableTitle>
      <S.TimetableList>
        {timeTable.map((time, i) => (
          <S.TimetableItem key={i}>
            <S.TimetableItemDate>{fixNum(i + 1)}</S.TimetableItemDate>
            {time}
          </S.TimetableItem>
        ))}
      </S.TimetableList>
    </S.Timetable>
  );
};

export default Timetable;
