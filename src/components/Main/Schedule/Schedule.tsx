import React, { FC, ReactElement } from 'react';

import * as S from '../style';
import Calendar from './Calendar/Calendar';

import { arrow } from '../../../assets/main';

interface Props {}

const Schedule: FC<Props> = (): ReactElement => {
  return (
    <S.Schedule>
      <header>
        <h3>학사일정</h3>
        <div>
          <span>2020년 8월 17일</span>
          <img src={arrow} alt="arrow" title="arrow" />
          <img src={arrow} alt="arrow" title="arrow" className="down" />
        </div>
      </header>
      <Calendar />
    </S.Schedule>
  );
};

export default Schedule;
