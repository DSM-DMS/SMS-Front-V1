import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NoticeList } from "../../../components";
import qs from "query-string";
import { RouteChildrenProps } from "react-router-dom";
import {
  getNoticeSchoolList,
  searchNoticeSchoolList
} from "../../../modules/action/notice/list";

const NoticeListContainer: FC<RouteChildrenProps> = ({ location }) => {
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
  return <NoticeList />;
};

export default NoticeListContainer;
