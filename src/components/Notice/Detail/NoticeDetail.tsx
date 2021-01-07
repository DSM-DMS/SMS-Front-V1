import React, { FC } from "react";
import { NavIconNoticeBlue } from "../../../assets";
import { useSelector } from "react-redux";
import { stateType } from "../../../modules/reducer";
import NoticeDetailComponent, {
  NoticeDetailHeaderSet
} from "../../default/NoticeDetail/NoticeDetail";

const NoticeDetail: FC = () => {
  const { boardData, loading } = useSelector((state: stateType) => ({
    boardData: state.noticeDetail,
    loading: state.loading["notice/GET_NOTICE_DETAIL"]
  }));

  const headerData: NoticeDetailHeaderSet = {
    color: "#5323B2",
    href: "/notice",
    imgSrc: NavIconNoticeBlue,
    title: "공지 사항"
  };

  return (
    <NoticeDetailComponent
      boardData={boardData}
      loading={loading}
      headerData={headerData}
    />
  );
};

export default NoticeDetail;
