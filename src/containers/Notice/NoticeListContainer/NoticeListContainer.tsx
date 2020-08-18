import React, { FC, useState, useCallback, ChangeEvent } from 'react';
import { NavIconNoticeBlue } from '../../../assets';
import Board from '../../../components/Board/Board';
import * as S from './styles';
import { NoticeFilterFunc } from '../../../lib/api';

const date = [
  {
    id: 1,
    title: '제목1',
    date: '2020.07.08',
    viewCount: 1,
  },
  {
    id: 2,
    title: '제목22',
    date: '2020.07.08',
    viewCount: 2,
  },
  {
    id: 3,
    title: '제목333',
    date: '2020.07.08',
    viewCount: 3,
  },
  {
    id: 4,
    title: '제목4444',
    date: '2020.07.08',
    viewCount: 4,
  },
];

const NoticeContainer: FC = () => {
  return (
    <S.Container>
      <Board
        boardData={date}
        date={false}
        title="공지사항"
        imgSrc={NavIconNoticeBlue}
        filterFunc={NoticeFilterFunc}
      />
    </S.Container>
  );
};

export default NoticeContainer;
