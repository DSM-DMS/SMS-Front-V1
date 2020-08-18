import React, { FC, ReactElement } from 'react';

import * as S from '../style';

interface Props {}

const ScheduleDetail: FC<Props> = (): ReactElement => {
  return (
    <S.ScheduleDetail>
      <header>
        <h2>세부내용</h2>
        <p>
          <span>일정</span>
          <span>날짜</span>
        </p>
      </header>
      <div>
        <p>
          <span>스카프 마무리</span>
          <span>7.12</span>
        </p>
        <p>
          <span>스카프</span>
          <span>7.17 - 7.18</span>
        </p>
        <p>
          <span>스카프</span>
          <span>7.17 - 7.18</span>
        </p>
      </div>
    </S.ScheduleDetail>
  );
};

export default ScheduleDetail;
