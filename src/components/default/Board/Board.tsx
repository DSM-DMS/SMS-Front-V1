import React, { FC, useState, useCallback, ChangeEvent } from 'react';
import * as S from './styles';
import BoardTable from './Table/Table';
import { ListPageHeader } from '../index';

export interface BoardObj {
  id: number;
  title: string;
  date: string;
  viewCount: number;
}

interface Props {
  title: string;
  names: string[];
  imgSrc: string;
  boardData: BoardObj[];
  filterFunc: (keyword: string) => BoardObj[];
}

const Board: FC<Props> = ({ title, imgSrc, boardData, names, filterFunc }) => {
  const [keyword, setKeyword] = useState<string>('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }, []);
  return (
    <S.Container>
      <ListPageHeader title={title} imgSrc={imgSrc} onChange={onChange} />
      <BoardTable boardData={filterFunc(keyword)} names={names} />
    </S.Container>
  );
};

export default Board;
