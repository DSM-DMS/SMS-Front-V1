import React, { FC } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AdminNoticeAllDetail } from '../../../../components';
import { updateBoardDetail } from '../../../../modules/action/board';

const AdminNoticeMineDetailContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateBoardDetail({ content: '몰라 씨@@@@발' }));
  }, []);
  return <AdminNoticeAllDetail />;
};

export default AdminNoticeMineDetailContainer;
