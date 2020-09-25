import React, { ChangeEvent, FC, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { NavIconNoticeMint } from '../../../../assets';
import { stateType } from '../../../../modules/reducer';
import { Board, ListPageHeader } from '../../../default';
import * as S from './styles';

const names = ['번호', '제목', '날짜', '조회수'];

const AdminNoticeAll: FC = () => {
  const [keyword, setKeyword] = useState<string>('');
  const data = useSelector((state: stateType) => state.board.list);
  const changeKeyword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }, []);

  return (
    <S.Container>
      <ListPageHeader
        imgSrc={NavIconNoticeMint}
        onChange={changeKeyword}
        title="전체 공지사항"
      />
      <Board
        names={names}
        data={data.filter(({ title }) => title.includes(keyword))}
      />
    </S.Container>
  );
};

export default AdminNoticeAll;
