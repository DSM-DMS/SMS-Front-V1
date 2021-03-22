import React, { useEffect, FC } from "react";
import { useDispatch } from "react-redux";
import { RouteChildrenProps } from "react-router-dom";
import { ManagementNotice } from "../../../components";
import qs from "query-string";
import {
  getNoticeClubList,
  searchNoticeClubList
} from "../../../modules/action/notice/list";

const ManagementEditContainer: FC<RouteChildrenProps> = ({ location }) => {
  const dispatch = useDispatch();
  const page: number = Number(qs.parse(location.search).page) || 0;
  const query: string = (qs.parse(location.search).search as string) || "";

  useEffect(() => {
    if (query.length > 0) {
      dispatch(searchNoticeClubList({ query, page }));
      return;
    }
    dispatch(getNoticeClubList(page));
  }, [page, query]);
  return <ManagementNotice />;
};

export default ManagementEditContainer;
