import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NoticeList } from "../../../components";
import qs from "query-string";
import { RouteChildrenProps } from "react-router-dom";
import { getNoticeSchoolList } from "../../../modules/action/notice/list";

const NoticeListContainer: FC<RouteChildrenProps> = ({ location }) => {
  const dispatch = useDispatch();
  const page = Number(qs.parse(location.search).page) || 0;
  useEffect(() => {
    dispatch(getNoticeSchoolList(page));
  }, [page]);
  return <NoticeList />;
};

export default NoticeListContainer;
