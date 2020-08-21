import React, { FC } from 'react';
import { CircleNoticeList } from '../../../../components';
import { BoardObj } from '../../../../components/default/Board/Board';

const data: BoardObj[] = [
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

const CircleNoticeListContainer: FC = () => {
  return <CircleNoticeList data={data} />;
};

export default CircleNoticeListContainer;
