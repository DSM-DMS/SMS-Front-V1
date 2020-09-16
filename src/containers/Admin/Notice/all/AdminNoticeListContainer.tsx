import React from 'react';
import { useEffect } from 'react';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AdminNoticeAll } from '../../../../components';
import { BoardObj } from '../../../../components/default/Board/Board';
import { updateBoardList } from '../../../../modules/action/board';

const makeData = (length: number): BoardObj[] => {
  const array: BoardObj[] = new Array(length).fill({});

  return array.map((_, index) => ({
    date: '2020.07' + index,
    id: index,
    title: index + '번째 게시글',
    viewCount: index,
  }));
};

const AdminNoticeAllListContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateBoardList(makeData(20)));
  }, []);
  return <AdminNoticeAll />;
};

export default AdminNoticeAllListContainer;
