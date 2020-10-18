import React from "react";
import { FC } from "react";
import { NavIconNoticeBlack } from "../../../assets";
import { DetailPageHeader } from "../../default";
import NoticeDetailBody from "../../Notice/Detail/NoticeDetailBody/NoticeDetailBody";
import * as S from "./styles";

const ManagementNoticeDetail: FC = () => {
  return (
    <S.Container>
      <DetailPageHeader
        isMine={true}
        imgSrc={NavIconNoticeBlack}
        title="동아리 공지사항"
        href="/management/notice"
        color="black"
      />
      <S.P>몰라요 몰랑</S.P>
      <NoticeDetailBody content={"dsadasd"} />
      <S.ButtonWrap>
        <S.GoToEdit
          to="/management/edit/1"
          color="#242424"
          backgroundColor="#FBFBFB"
        >
          수정
        </S.GoToEdit>
        <S.Button color="#FBFBFB" backgroundColor="#FF5555">
          삭제
        </S.Button>
      </S.ButtonWrap>
    </S.Container>
  );
};

export default ManagementNoticeDetail;
