import React from 'react';
import { FC } from 'react';
import * as S from './styles';
import { IconWhite } from '../../../../assets/';

const NavigationHeader: FC = () => {
  return (
    <S.Container>
      <S.LogoImg src={IconWhite} />
      <S.LogoText>SMS</S.LogoText>
    </S.Container>
  );
};

export default NavigationHeader;
