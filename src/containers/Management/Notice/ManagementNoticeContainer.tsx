import React, { useEffect } from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { RouteChildrenProps } from "react-router-dom";
import { ManagementNotice } from "../../../components";
import { getCircleNoticeListSaga } from "../../../modules/action/notice";
import qs from "query-string";

const ManagementEditContainer: FC<RouteChildrenProps> = ({ location }) => {
  const dispatch = useDispatch();
  const page = qs.parse(location.search).page || 0;

  useEffect(() => {
    dispatch(getCircleNoticeListSaga(Number(page)));
  }, [page]);
  return <ManagementNotice />;
};

export default ManagementEditContainer;
