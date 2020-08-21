import React, { FC } from 'react';
import * as S from './styles';
import { DetailPageHeader } from '../../../components/default';
import { NavIconNoticeBlue } from '../../../assets';
import NoticeDetailBody from './NoticeDetailBody/NoticeDetailBody';
import { BoardDetail } from '../../../containers/Notice/Detail/NoticeDetailContainer';

interface Props {
  data: BoardDetail;
}

const NoticeDetail: FC<Props> = ({ data }) => {
  return (
    <S.Container>
      <DetailPageHeader
        title="공지사항"
        imgSrc={NavIconNoticeBlue}
        href="/notice"
      />
      <S.P>대덕사이버고등학교에 다니고 새인생이 시작됐다~</S.P>
      <NoticeDetailBody content={data.content} />
    </S.Container>
  );
};

export default NoticeDetail;
