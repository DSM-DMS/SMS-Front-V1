import React, { FC, useState, useCallback, ChangeEvent } from 'react';
import { NavIconNoticeBlue } from '../../../assets';
import { Board } from '../../default';
import * as S from './styles';
import { makeFilterFunc } from '../../../lib/api';
import { BoardObj } from '../../default/Board/Board';

const names = ['번호', '제목', '날짜', '조회수'];

interface Props {
  data: BoardObj[];
}

const NoticeContainer: FC<Props> = ({ data }) => {
  const noticeFilterFunc = makeFilterFunc<BoardObj>(data, (data) => [
    data.title,
  ]);
  return (
    <S.Container>
      <Board
        names={names}
        boardData={data}
        title="공지사항"
        imgSrc={NavIconNoticeBlue}
        filterFunc={noticeFilterFunc}
      />
    </S.Container>
  );
};

export default NoticeContainer;
