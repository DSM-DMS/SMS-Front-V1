import React, { FC, useEffect } from "react";
import qs from "query-string";
import { CircleNoticeList } from "../../../../components";
import { useDispatch } from "react-redux";
import { RouteChildrenProps } from "react-router-dom";
import {
  getNoticeClubList,
  searchNoticeClubList
} from "../../../../modules/action/notice/list";

const CircleNoticeListContainer: FC<RouteChildrenProps> = ({ match }) => {
  const dispatch = useDispatch();
  const page: number = Number((match.params as any).page) || 0;
  const query: string = (qs.parse(location.search).search as string) || "";

  useEffect(() => {
    if (query.length > 0) {
      dispatch(searchNoticeClubList({ query, page }));
      return;
    }
    dispatch(getNoticeClubList(page));
  }, [page, query]);
  return <CircleNoticeList />;
};

export default CircleNoticeListContainer;
