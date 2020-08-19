import React, { FC, ReactElement } from 'react';

import * as S from '../style';

import { Schedule } from '../../../containers/Main/MainContainer';

interface Props {
  schedules: Schedule[];
}

const ScheduleDetail: FC<Props> = ({ schedules }): ReactElement => {
  return (
    <S.ScheduleDetail>
      <S.DetailHeader>
        <S.DetailTitle>세부내용</S.DetailTitle>
        <S.DetailHead>
          <S.DetailHeadData>일정</S.DetailHeadData>
          <S.DetailHeadData>날짜</S.DetailHeadData>
        </S.DetailHead>
      </S.DetailHeader>
      <S.DetailBody>
        {schedules.map(({ schedule, startDate, endDate }, i) => (
          <S.DetailBodyItem key={i}>
            <S.DetailBodyItemData>{schedule}</S.DetailBodyItemData>
            <S.DetailBodyItemData>
              {startDate === endDate ? startDate : `${startDate} - ${endDate}`}
            </S.DetailBodyItemData>
          </S.DetailBodyItem>
        ))}
      </S.DetailBody>
    </S.ScheduleDetail>
  );
};

export default ScheduleDetail;
