import React from "react";
import { useEffect } from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { RouteChildrenProps } from "react-router-dom";
import { AdminNoticeAll } from "../../../../components";
import { getNoticeListSaga } from "../../../../modules/action/notice";
import qs from "query-string";

const AdminNoticeAllListContainer: FC<RouteChildrenProps> = ({ location }) => {
  const dispatch = useDispatch();
  const page = qs.parse(location.search).page || 0;
  useEffect(() => {
    dispatch(getNoticeListSaga(Number(page)));
  }, [page]);
  return <AdminNoticeAll />;
};

export default AdminNoticeAllListContainer;
