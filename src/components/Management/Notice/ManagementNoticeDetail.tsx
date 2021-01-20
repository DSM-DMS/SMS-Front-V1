import React, { FC } from "react";
import { useSelector } from "react-redux";
import { NavIconNoticeBlack } from "../../../assets";
import { stateType } from "../../../modules/reducer";
import { NoticeDetail } from "../../default";
import { NoticeDetailHeaderSet } from "../../default/NoticeDetail/NoticeDetail";

const ManagementNoticeDetail: FC = () => {
  const { boardData, loading } = useSelector((state: stateType) => ({
    boardData: state.noticeDetail,
    loading: state.loading["notice/GET_NOTICE_DETAIL"]
  }));

  const noticeDetailSet: NoticeDetailHeaderSet = {
    color: "black",
    href: "/management/notice",
    imgSrc: NavIconNoticeBlack,
    title: "동아리 공지사항",
    isMine: true
  };

  return (
    <NoticeDetail
      boardData={boardData}
      headerData={noticeDetailSet}
      loading={loading}
    />
  );
};

export default ManagementNoticeDetail;
