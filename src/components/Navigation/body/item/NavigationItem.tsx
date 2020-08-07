import React, { memo } from 'react';
import { FC } from 'react';
import * as S from './styles';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { pageMove } from '../../../../modules/action/page';

interface Props {
  name: string;
  src: string;
  isActive: boolean;
}

const NavigationItem: FC<Props> = ({ src, name, isActive }) => {
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(pageMove(name));
  }, [dispatch]);

  return (
    <S.Container onClick={onClick} isActive={isActive}>
      <S.Img src={src} />
      <S.ItemName>{name}</S.ItemName>
    </S.Container>
  );
};

export default memo(NavigationItem);
