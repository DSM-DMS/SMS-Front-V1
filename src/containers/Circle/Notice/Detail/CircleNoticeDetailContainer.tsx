import React, { FC, useEffect } from "react";
import { CircleNoticeDetail } from "../../../../components";
import { useDispatch } from "react-redux";
import { RouteChildrenProps } from "react-router-dom";
import { getNoticeDetail } from "../../../../modules/action/notice/detail";

const CircleNoticeDetailContainer: FC<RouteChildrenProps> = ({ match }) => {
  const dispatch = useDispatch();

  const id: string = (match.params as any).id;
  useEffect(() => {
    dispatch(getNoticeDetail(id));
  }, [id]);
  return <CircleNoticeDetail />;
};

export default CircleNoticeDetailContainer;
