import React, { FC, useState, useCallback, ChangeEvent } from 'react';
import * as S from './styles';
import BoardTable from './Table/Table';
import { ListPageHeader } from '../../components';

export interface BoardObj {
  id: number;
  title: string;
  date: string;
  viewCount: number;
}

interface Props {
  title: string;
  imgSrc: string;
  boardData: BoardObj[];
  date: boolean;
  filterFunc: (data: BoardObj[], keyword: string) => BoardObj[];
}

const Board: FC<Props> = ({ title, imgSrc, boardData, date, filterFunc }) => {
  const [keyword, setKeyword] = useState<string>('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }, []);
  return (
    <S.Container>
      <ListPageHeader title={title} imgSrc={imgSrc} onChange={onChange} />
      <BoardTable boardData={filterFunc(boardData, keyword)} date={date} />
    </S.Container>
  );
};

export default Board;
