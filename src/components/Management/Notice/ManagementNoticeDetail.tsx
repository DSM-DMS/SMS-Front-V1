import React from "react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { NavIconNoticeBlack } from "../../../assets";
import { stateType } from "../../../modules/reducer";
import { DetailPageHeader } from "../../default";
import NoticeDetailBody from "../../Notice/Detail/NoticeDetailBody/NoticeDetailBody";
import * as S from "./styles";

interface Props {
  id: string;
}

const ManagementNoticeDetail: FC<Props> = ({ id }) => {
  const { content, loading } = useSelector(
    (store: stateType) => store.notice.detail
  );

  return (
    <S.Container>
      <DetailPageHeader
        isMine={true}
        imgSrc={NavIconNoticeBlack}
        title="동아리 공지사항"
        href="/management/notice"
        color="black"
      />
      {loading || <NoticeDetailBody content={content} />}
      <S.ButtonWrap>
        <S.GoToEdit
          to={`/management/edit/${id}`}
          color="#242424"
          backgroundcolor="#FBFBFB"
        >
          수정
        </S.GoToEdit>
        <S.Button color="#FBFBFB" backgroundcolor="#FF5555">
          삭제
        </S.Button>
      </S.ButtonWrap>
    </S.Container>
  );
};

export default ManagementNoticeDetail;
