import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NoticeList } from "../../../components";
import { getNoticeListSaga } from "../../../modules/action/notice";
import qs from "query-string";
import { RouteChildrenProps } from "react-router-dom";

const NoticeListContainer: FC<RouteChildrenProps> = ({ location }) => {
  const dispatch = useDispatch();
  const page = qs.parse(location.search).page || 0;
  useEffect(() => {
    dispatch(getNoticeListSaga(Number(page)));
  }, [page]);
  return <NoticeList />;
};

export default NoticeListContainer;
