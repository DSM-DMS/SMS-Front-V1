import React, { FC } from "react";
import { DetailPageHeader } from "../../../../components/default";
import { NavIconNoticeBlue } from "../../../../assets";
import * as S from "./styles";
import NoticeDetailBody from "../../../../components/Notice/Detail/NoticeDetailBody/NoticeDetailBody";
import { customSelector } from "../../../../lib/utils";

const CircleNoticeDetailContainer: FC = () => {
  const { content } = customSelector(state => state.board.detail);

  return (
    <S.Container>
      <DetailPageHeader
        color="#5323B2"
        isMine={false}
        title="동아리 공지사항"
        imgSrc={NavIconNoticeBlue}
        href="/circles/notice"
      />
      <p>대덕사이버고등학교에 다니고 새인생이 시작됐다~</p>
      <NoticeDetailBody content={content} />
    </S.Container>
  );
};

export default CircleNoticeDetailContainer;
