import React, { FC } from 'react';
import * as S from './styles';
import { CircleAllDetail } from '../../../containers/Circle/All/Detail/CircleAllDetailContainer';
import AllHeader from './Header/AllHeader';
import AllBody from './Body/AllBody';

const CircleAllDetail: FC = () => {
  return (
    <S.Container>
      <AllHeader />
      <AllBody />
    </S.Container>
  );
};

export default CircleAllDetail;
