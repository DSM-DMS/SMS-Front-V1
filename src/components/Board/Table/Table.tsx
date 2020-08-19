import React, { FC, memo } from 'react';
import BoardTableHeader from './header/BoardTableHeader';
import BoardTableBody from './body/BoardTableBody';
import { BoardObj } from '../Board';

interface Props {
  boardData: BoardObj[];
  date: boolean;
}

const BoardTable: FC<Props> = ({ boardData, date }) => {
  return (
    <>
      <BoardTableHeader date={date} />
      <BoardTableBody data={boardData} />
    </>
  );
};

export default BoardTable;
