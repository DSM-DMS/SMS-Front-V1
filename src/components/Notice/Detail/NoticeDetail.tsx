import React, { FC } from "react";
import * as S from "./styles";
import { DetailPageHeader } from "../../../components/default";
import { NavIconNoticeBlue } from "../../../assets";
import NoticeDetailBody from "./NoticeDetailBody/NoticeDetailBody";
import { customSelector } from "../../../lib/utils";

const NoticeDetail: FC = () => {
  const { content } = customSelector(state => state.board.detail);

  return (
    <S.Container>
      <DetailPageHeader
        color="#5323B2"
        isMine={false}
        title="공지사항"
        imgSrc={NavIconNoticeBlue}
        href="/notice"
      />
      <S.P>대덕사이버고등학교에 다니고 새인생이 시작됐다~</S.P>
      <NoticeDetailBody content={content} />
    </S.Container>
  );
};

export default NoticeDetail;
