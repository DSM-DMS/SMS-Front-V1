import React, { ChangeEvent, useCallback, useState, FC } from "react";
import { useSelector } from "react-redux";
import { NavIconNoticeBlack } from "../../../assets";
import { stateType } from "../../../modules/reducer";
import NoticeList, { NoticeListSet } from "../../default/NoticeList/NoticeList";

const ManagementNotice: FC = () => {
  const { announcements, size, loading } = useSelector((state: stateType) => ({
    ...state.noticeList,
    loading: state.loading["notice/GET_NOTICE_LIST"]
  }));

  const noticeListSet: NoticeListSet = {
    title: "공지사항",
    size,
    imgSrc: NavIconNoticeBlack,
    names: ["번호", "제목", "날짜", "동아리", "조회수"],
    newButton: true
  };

  return (
    <NoticeList
      loading={loading}
      notices={announcements}
      setting={noticeListSet}
    />
  );
};

export default ManagementNotice;
