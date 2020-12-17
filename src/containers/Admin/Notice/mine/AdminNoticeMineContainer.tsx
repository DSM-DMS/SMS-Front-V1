import React from "react";
import { useEffect } from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { AdminNoticeMine } from "../../../../components";
import { getNoticeListSaga } from "../../../../modules/action/notice";
import qs from "query-string";

const AdminNoticeMineContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const page = qs.parse(location.search).page || 0;
    dispatch(getNoticeListSaga(Number(page)));
  }, []);
  return <AdminNoticeMine />;
};

export default AdminNoticeMineContainer;
