import React, { FC, ReactElement } from 'react';

import * as S from '../style';

interface Props {}

const timeTable: string[] = [
  '성직',
  '성직',
  '성직',
  '성직',
  '성직',
  '성직',
  '성직',
];

const Timetable: FC<Props> = (): ReactElement => {
  return (
    <S.Timetable>
      <h2>시간표</h2>
      <div>
        <ul>
          {timeTable.map((time, i) => (
            <li key={i}>{time}</li>
          ))}
        </ul>
      </div>
    </S.Timetable>
  );
};

export default Timetable;
