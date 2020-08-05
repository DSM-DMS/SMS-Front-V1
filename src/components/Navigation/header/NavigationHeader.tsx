import React from 'react';
import { FC } from 'react';
import * as S from './styles';
import WhiteIcon from '../../../assets/Icon-white.png';

const NavigationHeader: FC = () => {
  return (
    <S.Container>
      <S.LogoImg src={WhiteIcon} />
      <S.LogoText>SMS</S.LogoText>
    </S.Container>
  );
};

export default NavigationHeader;
