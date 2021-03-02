import React, { ChangeEvent, FC } from "react";
import { NavIconNoticeBlue } from "../../../assets";
import { NoticeList as NoticeListComponent } from "../../default";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "../../../modules/reducer";
import { NoticeListSet } from "../../default/NoticeList/NoticeList";
import {
  getNoticeSchoolList,
  searchNoticeSchoolList
} from "../../../modules/action/notice/list";

const NoticeContainer: FC = () => {
  const { announcements, size, loading } = useSelector((state: stateType) => ({
    ...state.noticeList,
    loading: state.loading["notice/GET_NOTICE_LIST"]
  }));

  const noticeListSet: NoticeListSet = {
    title: "학교 공지사항",
    size,
    imgSrc: NavIconNoticeBlue,
    names: ["번호", "제목", "날짜", "글쓴이", "조회수"]
  };

  return (
    <NoticeListComponent
      loading={loading}
      notices={announcements}
      setting={noticeListSet}
    />
  );
};

export default NoticeContainer;
