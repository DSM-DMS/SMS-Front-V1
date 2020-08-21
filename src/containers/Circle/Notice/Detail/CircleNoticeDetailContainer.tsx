import React, { FC } from 'react';
import { CircleNoticeDetail } from '../../../../components';
import { BoardDetail } from '../../../Notice/Detail/NoticeDetailContainer';

const data: BoardDetail = {
  content: '몰라요 몰랑~',
};

const CircleNoticeDetailContainer: FC = () => {
  return <CircleNoticeDetail data={data} />;
};

export default CircleNoticeDetailContainer;
