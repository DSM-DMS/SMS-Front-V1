import React from 'react';
import { FC } from 'react';
import * as S from './styles';

interface Props {
  name: string;
  src: string;
  isActive: boolean;
  onClick: () => void;
}

const NavigationItem: FC<Props> = ({ src, name, isActive, onClick }) => {
  return (
    <S.Container onClick={onClick} isActive={isActive}>
      <S.Header>
        <S.Img src={src} />
        <S.ItemName>{name}</S.ItemName>
      </S.Header>
      {isActive && <S.Triangle />}
    </S.Container>
  );
};

export default NavigationItem;
