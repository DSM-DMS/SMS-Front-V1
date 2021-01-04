import React, { FC } from "react";
import { CircleNoticeDetail } from "../../../../components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import qs from "query-string";
import { getNoticeDetailSaga } from "../../../../modules/action/notice";
import { RouteChildrenProps } from "react-router-dom";

const CircleNoticeDetailContainer: FC<RouteChildrenProps> = ({ match }) => {
  const dispatch = useDispatch();

  const id: string = (match.params as any).id;
  useEffect(() => {
    dispatch(getNoticeDetailSaga(id));
  }, [id]);
  return <CircleNoticeDetail />;
};

export default CircleNoticeDetailContainer;
