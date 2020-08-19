import React, { FC, ReactElement } from 'react';

import * as S from './style';
import Schedule from './Schedule/Schedule';
import ScheduleDetail from './ScheduleDetail/ScheduleDetail';
import Outing from './Outing/Outing';
import Timetable from './Timetable/Timetable';

import { Schedule as ISchedule } from '../../containers/Main/MainContainer';

interface Props {
  schedules: ISchedule[];
}

const Main: FC<Props> = ({ schedules }): ReactElement => {
  return (
    <S.MainWrap>
      <S.MainLeft>
        <Schedule schedules={schedules} />
        <Timetable />
      </S.MainLeft>
      <S.MainRight>
        <ScheduleDetail schedules={schedules} />
        <Outing />
      </S.MainRight>
    </S.MainWrap>
  );
};

export default Main;
