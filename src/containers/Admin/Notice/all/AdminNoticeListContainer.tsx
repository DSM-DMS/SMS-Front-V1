import React from "react";
import { useEffect } from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { RouteChildrenProps } from "react-router-dom";
import { AdminNoticeAll } from "../../../../components";
import qs from "query-string";
import { getNoticeSchoolList } from "../../../../modules/action/notice/list";

const AdminNoticeAllListContainer: FC<RouteChildrenProps> = ({ location }) => {
  const dispatch = useDispatch();
  const page = qs.parse(location.search).page || 0;
  useEffect(() => {
    dispatch(getNoticeSchoolList(Number(page)));
  }, [page]);
  return <AdminNoticeAll />;
};

export default AdminNoticeAllListContainer;
