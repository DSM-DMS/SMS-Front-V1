import React, { FC } from 'react';
import { NoticeList } from '../../../components';
import { BoardObj } from '../../../components/default/Board/Board';

const data: BoardObj[] = [
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

const NoticeListContainer: FC = () => {
  return <NoticeList data={data} />;
};

export default NoticeListContainer;
