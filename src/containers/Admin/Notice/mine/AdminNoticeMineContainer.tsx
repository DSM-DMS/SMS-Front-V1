import React from "react";
import { useEffect } from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { AdminNoticeMine } from "../../../../components";
import { getWriterNoticeListSaga } from "../../../../modules/action/notice";
import qs from "query-string";

const AdminNoticeMineContainer: FC = () => {
  const dispatch = useDispatch();
  const page = qs.parse(location.search).page || 0;

  useEffect(() => {
    const teacherUuid = window.localStorage.getItem("teacher_uuid");
    dispatch(getWriterNoticeListSaga(teacherUuid));
  }, [page]);

  return <AdminNoticeMine />;
};

export default AdminNoticeMineContainer;
