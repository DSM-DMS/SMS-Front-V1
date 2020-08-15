import React, { FC } from 'react';
import { BoardObj } from '../../../Board';
import * as S from './styles';

const BoardTableItem: FC<BoardObj> = ({ id, title, viewCount, date }) => {
  return (
    <S.ItemContainer>
      <div>{id}</div>
      <div>{title}</div>
      <div>{date}</div>
      <div>{viewCount}</div>
    </S.ItemContainer>
  );
};

export default BoardTableItem;
