import React from 'react';
import { useEffect } from 'react';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AdminNoticeMine } from '../../../../components';
import { updateBoardList } from '../../../../modules/action/board';

const AdminNoticeMineContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      updateBoardList(
        new Array(10).fill({}).map((_, index) => ({
          id: index,
          title: index + '',
          viewCount: index,
          date: index + '',
        })),
      ),
    );
  }, []);
  return <AdminNoticeMine />;
};

export default AdminNoticeMineContainer;
