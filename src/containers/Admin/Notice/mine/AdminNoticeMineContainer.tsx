import React from "react";
import { useEffect } from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { AdminNoticeMine } from "../../../../components";
import qs from "query-string";
import { getNoticeWriterList } from "../../../../modules/action/notice/list";

const AdminNoticeMineContainer: FC = () => {
  const dispatch = useDispatch();
  const page = Number(qs.parse(location.search).page) || 0;

  useEffect(() => {
    const teacherUuid = window.localStorage.getItem("uuid");
    dispatch(getNoticeWriterList({ uuid: teacherUuid, page: page }));
  }, [page]);

  return <AdminNoticeMine />;
};

export default AdminNoticeMineContainer;
