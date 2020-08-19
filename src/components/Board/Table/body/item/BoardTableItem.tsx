import React, { FC, useEffect, useCallback, memo } from 'react';
import { BoardObj } from '../../../Board';
import * as S from './styles';
import { useHistory } from 'react-router';

const BoardTableItem: FC<BoardObj> = ({ id, title, viewCount, date }) => {
  const history = useHistory();
  const onClick = useCallback(() => {
    history.push(`${history.location.pathname}/${id}`);
  }, []);
  return (
    <S.ItemContainer onClick={onClick}>
      <div>{id}</div>
      <div>{title}</div>
      <div>{date}</div>
      <div>{viewCount}</div>
    </S.ItemContainer>
  );
};

export default memo(BoardTableItem);
