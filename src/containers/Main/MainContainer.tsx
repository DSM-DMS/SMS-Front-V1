import React, { FC, ReactElement } from 'react';

import { Main } from '../../components';

interface Props {}

export interface Schedule {
  schedule: string;
  startDate: string;
  endDate: string;
}

const schedules: Schedule[] = [
  {
    schedule: '스카프 마무리 1칸',
    startDate: '8.16',
    endDate: '8.16',
  },
  {
    schedule: '스카프 마무리 2칸',
    startDate: '8.19',
    endDate: '8.23',
  },
  {
    schedule: '스카프 마무리 3칸',
    startDate: '8.19',
    endDate: '8.30',
  },
];

const MainContainer: FC<Props> = (): ReactElement => {
  return <Main schedules={schedules} />;
};

export default MainContainer;
