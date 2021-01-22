import React, { FC } from "react";
import { NoticeDetail } from "../../../../components/default";
import { NavIconNoticeBlue } from "../../../../assets";
import { useSelector } from "react-redux";
import { stateType } from "../../../../modules/reducer";
import { NoticeDetailHeaderSet } from "../../../default/NoticeDetail/NoticeDetail";

const CircleNoticeDetailContainer: FC = () => {
  const { boardData, loading } = useSelector((state: stateType) => ({
    boardData: state.noticeDetail,
    loading: state.loading["notice/GET_NOTICE_DETAIL"]
  }));
  const headerData: NoticeDetailHeaderSet = {
    color: "#5323B2",
    title: "동아리 공지사항",
    imgSrc: NavIconNoticeBlue,
    href: "/circles/notice"
  };

  return (
    <NoticeDetail
      boardData={boardData}
      loading={loading}
      headerData={headerData}
    />
  );
};

export default CircleNoticeDetailContainer;
