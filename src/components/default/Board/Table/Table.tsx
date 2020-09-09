import React, { FC, memo } from 'react';
import BoardTableHeader from './header/BoardTableHeader';
import BoardTableBody from './body/BoardTableBody';
import { BoardObj } from '../Board';

interface Props {
  boardData: BoardObj[];
  names: string[];
}

const BoardTable: FC<Props> = ({ boardData, names }) => {
  return (
    <>
      <BoardTableHeader names={names} />
      <BoardTableBody data={boardData} />
    </>
  );
};

export default BoardTable;
