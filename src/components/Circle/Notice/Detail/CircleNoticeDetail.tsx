import React, { ChangeEvent, FC, useCallback, useState } from "react";
import { DetailPageHeader } from "../../../../components/default";
import { NavIconNoticeBlue } from "../../../../assets";
import * as S from "./styles";
import NoticeDetailBody from "../../../../components/Notice/Detail/NoticeDetailBody/NoticeDetailBody";
import { customSelector } from "../../../../lib/utils";
import { useSelector } from "react-redux";
import { stateType } from "../../../../modules/reducer";
import PagiNation from "../../../default/PagiNation/PagiNation";
import PageMove from "../../../default/PageMove/PageMove";

const CircleNoticeDetailContainer: FC = () => {
  const {
    content,
    date,
    next_announcement_uuid,
    next_title,
    previous_announcement_uuid,
    previous_title,
    title,
    writer_name,
    loading
  } = useSelector((state: stateType) => state.notice.detail);

  return (
    <S.Container>
      <DetailPageHeader
        color="#5323B2"
        isMine={false}
        title="동아리 공지사항"
        imgSrc={NavIconNoticeBlue}
        href="/circles/notice"
      />
      {loading || <NoticeDetailBody content={content} />}
      <PageMove
        baseHref="/circles/notice"
        nextAnnouncementUuid={next_announcement_uuid}
        nextTitle={next_title}
        previousAnnouncementUuid={previous_announcement_uuid}
        previousTitle={previous_title}
      />
    </S.Container>
  );
};

export default CircleNoticeDetailContainer;
