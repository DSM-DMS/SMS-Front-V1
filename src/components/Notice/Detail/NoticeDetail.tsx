import React, { FC, useEffect, useRef } from "react";
import * as S from "./styles";
import { DetailPageHeader } from "../../../components/default";
import { NavIconNoticeBlue } from "../../../assets";
import NoticeDetailBody from "./NoticeDetailBody/NoticeDetailBody";
import { useSelector } from "react-redux";
import { stateType } from "../../../modules/reducer";
import PageMove from "../../default/PageMove/PageMove";

const NoticeDetail: FC = () => {
  const {
    content,
    title,
    next_title,
    previous_title,
    next_announcement_uuid,
    previous_announcement_uuid
  } = useSelector((state: stateType) => state.notice.detail);

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
      <PageMove
        baseHref="/notice"
        nextAnnouncementUuid={next_announcement_uuid}
        nextTitle={next_title}
        previousAnnouncementUuid={previous_announcement_uuid}
        previousTitle={previous_title}
      />
    </S.Container>
  );
};

export default NoticeDetail;
