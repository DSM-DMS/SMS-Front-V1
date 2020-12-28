import React, { FC } from "react";
import { useSelector } from "react-redux";
import { NavIconNoticeMint } from "../../../../assets";
import { stateType } from "../../../../modules/reducer";
import { DetailPageHeader } from "../../../default";
import PageMove from "../../../default/PageMove/PageMove";
import NoticeDetailBody from "../../../Notice/Detail/NoticeDetailBody/NoticeDetailBody";
import * as S from "./styles";

const AdminNoticeAllDetail: FC = () => {
  const {
    content,
    title,
    date,
    next_announcement_uuid,
    next_title,
    previous_announcement_uuid,
    previous_title,
    writer_name
  } = useSelector((state: stateType) => state.notice.detail);
  return (
    <S.Container>
      <DetailPageHeader
        isMine={true}
        imgSrc={NavIconNoticeMint}
        title="전체 공지사항"
        href="/admin/notice/all"
        color="#23B2AD"
      />
      <NoticeDetailBody content={content} />
      <PageMove
        baseHref="/admin/notice/all"
        nextTitle={next_title}
        previousTitle={previous_title}
        nextAnnouncementUuid={next_announcement_uuid}
        previousAnnouncementUuid={previous_announcement_uuid}
      />
    </S.Container>
  );
};

export default AdminNoticeAllDetail;
