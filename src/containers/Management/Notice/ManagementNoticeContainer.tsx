import React, { useEffect, FC } from "react";
import { useDispatch } from "react-redux";
import { RouteChildrenProps } from "react-router-dom";
import { ManagementNotice } from "../../../components";
import qs from "query-string";
import { getNoticeClubList } from "../../../modules/action/notice/list";

const ManagementEditContainer: FC<RouteChildrenProps> = ({ location }) => {
  const dispatch = useDispatch();
  const page: number = Number(qs.parse(location.search).page) || 0;

  useEffect(() => {
    dispatch(getNoticeClubList(page));
  }, [page]);
  return <ManagementNotice />;
};

export default ManagementEditContainer;
