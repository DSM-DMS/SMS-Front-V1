import React, { FC } from 'react';
import * as S from './styles';
import WantedHeader from './Header/WantedHeader';
import WantedBody from './Body/WantedBody';
import { CircleWantedDetail } from '../../../containers/Circle/Wanted/Detail/CircleWantedDetailContainer';

const CircleWantedDetail: FC = () => {
  return (
    <S.Container>
      <WantedHeader />
      <WantedBody />
    </S.Container>
  );
};

export default CircleWantedDetail;
