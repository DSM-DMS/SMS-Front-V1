import React, { FC } from "react";
import { NavIconNoticeBlack } from "../../../assets";
import { NoticeEdit } from "../../default";
import { NoticeEditSet } from "../../default/NoticeEdit/NoticeEdit";
import { useSelector } from "react-redux";
import { stateType } from "../../../modules/reducer";

const ManagementNoticeEdit: FC = () => {
  const editData = useSelector((state: stateType) => state.noticeDetail);

  const setting: NoticeEditSet = {
    color: "black",
    imgSrc: NavIconNoticeBlack,
    title: "동아리 공지사항 수정",
    type: "club",
    cancelHref: "/management/notice"
  };

  return <NoticeEdit editData={editData} setting={setting} />;
};

export default ManagementNoticeEdit;
