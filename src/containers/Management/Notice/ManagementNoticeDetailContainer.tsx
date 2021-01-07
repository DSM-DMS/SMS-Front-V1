import React, { useEffect } from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { RouteChildrenProps } from "react-router-dom";
import { ManagementNoticeDetail } from "../../../components";
import { getNoticeDetail } from "../../../modules/action/notice/detail";

const ManagementNoticeDetailContainer: FC<RouteChildrenProps> = ({ match }) => {
  const dispatch = useDispatch();
  const id: string = (match.params as any).id;

  useEffect(() => {
    dispatch(getNoticeDetail(id));
  }, [id]);
  return <ManagementNoticeDetail />;
};

export default ManagementNoticeDetailContainer;
