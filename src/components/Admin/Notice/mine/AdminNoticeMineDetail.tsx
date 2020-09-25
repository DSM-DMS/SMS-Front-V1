import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { NavIconNoticeMint } from '../../../../assets';
import { stateType } from '../../../../modules/reducer';
import { DetailPageHeader } from '../../../default';
import NoticeDetailBody from '../../../Notice/Detail/NoticeDetailBody/NoticeDetailBody';
import * as S from './styles';

const AdminNoticeMineDetail: FC = () => {
  const data = useSelector((state: stateType) => state.board.detail);
  return (
    <S.Container>
      <DetailPageHeader
        isMine={true}
        imgSrc={NavIconNoticeMint}
        title="내가 올린 공지사항"
        href="/admin/notice/all"
        color="#23B2AD"
      />
      <NoticeDetailBody content={data.content} />
    </S.Container>
  );
};

export default AdminNoticeMineDetail;
