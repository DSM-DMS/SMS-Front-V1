import React, { FC, useEffect } from "react";
import { CircleNoticeList } from "../../../../components";
import { useDispatch } from "react-redux";
import { RouteChildrenProps } from "react-router-dom";
import { getNoticeClubList } from "../../../../modules/action/notice/list";

const CircleNoticeListContainer: FC<RouteChildrenProps> = ({ match }) => {
  const disaptch = useDispatch();
  const page: number = Number((match.params as any).page) || 0;
  useEffect(() => {
    disaptch(getNoticeClubList(page));
  }, [page]);
  return <CircleNoticeList />;
};

export default CircleNoticeListContainer;
