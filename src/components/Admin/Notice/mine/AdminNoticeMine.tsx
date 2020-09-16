import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { ChangeEvent } from 'react';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { NavIconNoticeMint } from '../../../../assets';
import { stateType } from '../../../../modules/reducer';
import { Board, ListPageHeader } from '../../../default';
import * as S from './styles';

const names = ['번호', '제목', '날짜', '조회수'];

const AdminNoticeMine: FC = () => {
  const [keyword, setKeyword] = useState<string>('');
  const changeKeyword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }, []);
  const data = useSelector((state: stateType) => state.board.list);
  return (
    <S.Container>
      <ListPageHeader
        imgSrc={NavIconNoticeMint}
        onChange={changeKeyword}
        title="내가 올린 공지사항"
      />
      <Board data={data} names={names} />
    </S.Container>
  );
};

export default AdminNoticeMine;
