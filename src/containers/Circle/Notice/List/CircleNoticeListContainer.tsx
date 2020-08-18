import React, { FC } from 'react';
import * as S from './styles';
import { Board } from '../../../../components';
import { NavIconNoticeBlue } from '../../../../assets';
import { CircleBoardFilterFunc } from '../../../../lib/api';

const date = [
  {
    id: 1,
    title: '제목1',
    date: '동아리1',
    viewCount: 1,
  },
  {
    id: 2,
    title: '제목22',
    date: '동아리2',
    viewCount: 2,
  },
  {
    id: 3,
    title: '제목333',
    date: '동아리3',
    viewCount: 3,
  },
  {
    id: 4,
    title: '제목4444',
    date: '동아리4',
    viewCount: 4,
  },
];

const CircleNoticeContainer: FC = () => {
  return (
    <S.Container>
      <Board
        boardData={date}
        title="동아리 공지사항"
        imgSrc={NavIconNoticeBlue}
        date={false}
        filterFunc={CircleBoardFilterFunc}
      />
    </S.Container>
  );
};

export default CircleNoticeContainer;
