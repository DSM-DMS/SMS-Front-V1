import React, { FC, ReactElement } from 'react';

import * as S from '../style';

interface Props {}

interface Schedule {
  schedule: string;
  startDate: string;
  endDate: string;
}

const schedules: Schedule[] = [
  {
    schedule: '스카프 마무리',
    startDate: '7.12',
    endDate: '',
  },
  {
    schedule: '스카프 마무리',
    startDate: '7.12',
    endDate: '',
  },
  {
    schedule: '스카프 마무리',
    startDate: '7.12',
    endDate: '',
  },
  {
    schedule: '스카프 마무리',
    startDate: '7.12',
    endDate: '',
  },
  {
    schedule: '스카프 마무리',
    startDate: '7.12',
    endDate: '',
  },
  {
    schedule: '스카프 마무리',
    startDate: '7.12',
    endDate: '',
  },
  {
    schedule: '스카프 마무리',
    startDate: '7.12',
    endDate: '',
  },
  {
    schedule: '스카프',
    startDate: '7.12',
    endDate: '7.18',
  },
  {
    schedule: '스카프 마무리',
    startDate: '7.12',
    endDate: '',
  },
  {
    schedule: '스카프',
    startDate: '7.12',
    endDate: '7.18',
  },
  {
    schedule: '스카qweqwe프',
    startDate: '7.12',
    endDate: '7.18',
  },
  {
    schedule: '스카프 마무리',
    startDate: '7.12',
    endDate: '',
  },
  {
    schedule: '스카프',
    startDate: '7.12',
    endDate: '7.18',
  },
  {
    schedule: '스카qweqwe프',
    startDate: '7.12',
    endDate: '7.18',
  },
  {
    schedule: '스카프 마무리',
    startDate: '7.12',
    endDate: '',
  },
  {
    schedule: '스카프',
    startDate: '7.12',
    endDate: '7.18',
  },
  {
    schedule: '스카qweqwe프',
    startDate: '7.12',
    endDate: '7.18',
  },
];

const ScheduleDetail: FC<Props> = (): ReactElement => {
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
              {endDate === '' ? startDate : `${startDate} - ${endDate}`}
            </S.DetailBodyItemData>
          </S.DetailBodyItem>
        ))}
      </S.DetailBody>
    </S.ScheduleDetail>
  );
};

export default ScheduleDetail;
