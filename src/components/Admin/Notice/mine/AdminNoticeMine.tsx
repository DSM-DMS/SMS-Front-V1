import React, { FC } from "react";
import { useSelector } from "react-redux";
import { NavIconNoticeMint } from "../../../../assets";
import { stateType } from "../../../../modules/reducer";
import NoticeList, {
  NoticeListSet
} from "../../../default/NoticeList/NoticeList";

const AdminNoticeMine: FC = () => {
  const { announcements, size, loading } = useSelector((state: stateType) => ({
    ...state.noticeList,
    loading: state.loading["notice/GET_NOTICE_LIST"]
  }));

  const noticeListSet: NoticeListSet = {
    title: "내가 쓴 공지사항",
    size,
    imgSrc: NavIconNoticeMint,
    names: ["번호", "제목", "날짜", "글쓴이", "조회수"]
  };

  return (
    <NoticeList
      loading={loading}
      notices={announcements}
      setting={noticeListSet}
    />
  );
};

export default AdminNoticeMine;
