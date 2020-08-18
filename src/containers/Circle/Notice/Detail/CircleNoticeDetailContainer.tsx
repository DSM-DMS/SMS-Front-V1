import React, { FC } from 'react';
import { DetailPageHeader, NoticeDetail } from '../../../../components';
import { NavIconNoticeBlue } from '../../../../assets';
import * as S from './styles';

const CircleNoticeDetailContainer: FC = () => {
  return (
    <S.Container>
      <DetailPageHeader
        title="동아리 공지사항"
        imgSrc={NavIconNoticeBlue}
        href="/circles/notice"
      />
      <p>대덕사이버고등학교에 다니고 새인생이 시작됐다~</p>
      <NoticeDetail content="몰라요 몰랑~" />
    </S.Container>
  );
};

export default CircleNoticeDetailContainer;
