import React, { FC, useEffect, useRef } from "react";
import * as S from "./styles";
import { DetailPageHeader } from "../../../components/default";
import { NavIconNoticeBlue } from "../../../assets";
import NoticeDetailBody from "./NoticeDetailBody/NoticeDetailBody";
import { customSelector } from "../../../lib/utils";

const NoticeDetail: FC = () => {
  const { content, title } = customSelector(state => state.notice.detail);

  return (
    <S.Container>
      <DetailPageHeader
        color="#5323B2"
        isMine={false}
        title="공지사항"
        imgSrc={NavIconNoticeBlue}
        href="/notice"
      />
      <S.P>{title}</S.P>
      <NoticeDetailBody content={content} />
      <div>dddddddddd</div>
    </S.Container>
  );
};

export default NoticeDetail;
