import React, { FC } from "react";
import { NavIconNoticeBlack } from "../../../assets";
import NoticeWrite, {
  NoticeWriteSet
} from "../../default/NoticeWrite/NoticeWrite";

const ManagementNoticeWrite: FC = () => {
  const noticeWriteSet: NoticeWriteSet = {
    color: "#23B2AD",
    imgSrc: NavIconNoticeBlack,
    title: "동아리 공지사항 작성",
    type: "club"
  };
  return <NoticeWrite setting={noticeWriteSet} />;
};

export default ManagementNoticeWrite;
