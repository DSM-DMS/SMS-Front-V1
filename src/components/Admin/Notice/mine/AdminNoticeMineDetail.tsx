import React, { FC } from "react";
import { useSelector } from "react-redux";
import { NavIconNoticeMint } from "../../../../assets";
import { stateType } from "../../../../modules/reducer";
import { DetailPageHeader } from "../../../default";
import NoticeDetailBody from "../../../Notice/Detail/NoticeDetailBody/NoticeDetailBody";
import * as S from "./styles";

const AdminNoticeMineDetail: FC = () => {
  const { content } = useSelector((state: stateType) => state.board.detail);
  return (
    <S.Container>
      <DetailPageHeader
        isMine={true}
        imgSrc={NavIconNoticeMint}
        title="내가 올린 공지사항"
        href="/admin/notice/all"
        color="#23B2AD"
      />
      <NoticeDetailBody content={content} />
    </S.Container>
  );
};

export default AdminNoticeMineDetail;
