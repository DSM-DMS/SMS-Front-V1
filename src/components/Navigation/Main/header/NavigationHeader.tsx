import React from 'react';
import { FC } from 'react';
import * as S from './styles';
import { IconBlack, IconWhite } from '../../../../assets/';

interface Props {
  isManagementMode: boolean;
}

const NavigationHeader: FC<Props> = ({ isManagementMode }) => {
  return (
    <S.Container>
      <S.InnerContainer>
        <S.LogoImg src={isManagementMode ? IconBlack : IconWhite} />
        <S.LogoText>SMS</S.LogoText>
      </S.InnerContainer>
      {isManagementMode && <div>Club Admin Service</div>}
    </S.Container>
  );
};

export default NavigationHeader;
