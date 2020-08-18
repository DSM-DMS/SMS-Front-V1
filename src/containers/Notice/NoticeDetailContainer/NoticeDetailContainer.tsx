import React, { FC } from 'react';
import * as S from './styles';
import { DetailPageHeader } from '../../../components';
import { NavIconNoticeBlue } from '../../../assets';
import { NoticeDetail } from '../../../components';

const NoticeDetailContainer: FC = () => {
  return (
    <S.Container>
      <DetailPageHeader
        title="공지사항"
        imgSrc={NavIconNoticeBlue}
        href="/notice"
      />
      <S.P>대덕사이버고등학교에 다니고 새인생이 시작됐다~</S.P>
      <NoticeDetail />
    </S.Container>
  );
};

export default NoticeDetailContainer;
