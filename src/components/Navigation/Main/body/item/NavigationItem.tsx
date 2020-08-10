import React, { memo } from 'react';
import { FC } from 'react';
import * as S from './styles';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { pageMove } from '../../../../../modules/action/page';
import { useHistory } from 'react-router';

interface Props {
  name: string;
  src: string;
  isActive: boolean;
  route: string;
}

const NavigationItem: FC<Props> = ({ src, name, isActive, route }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(pageMove(name));
    history.push(route);
  }, [dispatch]);

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

export default memo(NavigationItem);
