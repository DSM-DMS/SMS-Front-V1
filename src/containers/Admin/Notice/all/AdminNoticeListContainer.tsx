import React from "react";
import { useEffect } from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { RouteChildrenProps } from "react-router-dom";
import { AdminNoticeAll } from "../../../../components";
import qs from "query-string";
import {
  getNoticeSchoolList,
  searchNoticeSchoolList
} from "../../../../modules/action/notice/list";

const AdminNoticeAllListContainer: FC<RouteChildrenProps> = ({ location }) => {
  const dispatch = useDispatch();
  const page: number = Number(qs.parse(location.search).page) || 0;
  const query: string = (qs.parse(location.search).search as string) || "";

  useEffect(() => {
    if (query.length > 0) {
      dispatch(searchNoticeSchoolList({ query, page }));
      return;
    }
    dispatch(getNoticeSchoolList(page));
  }, [page, query]);
  return <AdminNoticeAll />;
};

export default AdminNoticeAllListContainer;
