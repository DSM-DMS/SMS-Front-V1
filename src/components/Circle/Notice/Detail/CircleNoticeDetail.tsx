import React, { FC } from 'react';
import { DetailPageHeader } from '../../../../components/default';
import { NavIconNoticeBlue } from '../../../../assets';
import * as S from './styles';
import NoticeDetailBody from '../../../../components/Notice/Detail/NoticeDetailBody/NoticeDetailBody';
import { BoardDetail } from '../../../../containers/Notice/Detail/NoticeDetailContainer';

interface Props {
  data: BoardDetail;
}

const CircleNoticeDetailContainer: FC<Props> = ({ data }) => {
  return (
    <S.Container>
      <DetailPageHeader
        title="동아리 공지사항"
        imgSrc={NavIconNoticeBlue}
        href="/circles/notice"
      />
      <p>대덕사이버고등학교에 다니고 새인생이 시작됐다~</p>
      <NoticeDetailBody content={data.content} />
    </S.Container>
  );
};

export default CircleNoticeDetailContainer;
