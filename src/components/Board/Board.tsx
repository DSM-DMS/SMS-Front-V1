import React, { FC } from 'react';
import * as S from './styles';
import PageHeader from '../PageHeader/PageHeader';
import BoardTable from './Table/Table';

export interface BoardObj {
  id: number;
  title: string;
  date: string;
  viewCount: number;
}

interface Props {
  title: string;
  imgSrc: string;
  boardData?: BoardObj[];
  date: boolean;
}

const Board: FC<Props> = ({ title, imgSrc, boardData, date }) => {
  return (
    <S.Container>
      <PageHeader title={title} imgSrc={imgSrc} />
      <S.Hr />
      <BoardTable boardData={boardData} date={date} />
    </S.Container>
  );
};

export default Board;
