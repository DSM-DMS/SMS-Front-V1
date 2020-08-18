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
  boardData?: BoardObj[];
  date: boolean;
}

const filterList = (state: BoardObj[], keyword: string) =>
  state.filter((item) => item.title.includes(keyword));

const Board: FC<Props> = ({ title, imgSrc, boardData, date }) => {
  const [keyword, setKeyword] = useState<string>('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }, []);
  return (
    <S.Container>
      <ListPageHeader title={title} imgSrc={imgSrc} onChange={onChange} />
      <S.Hr />
      <BoardTable boardData={filterList(boardData, keyword)} date={date} />
    </S.Container>
  );
};

export default Board;
